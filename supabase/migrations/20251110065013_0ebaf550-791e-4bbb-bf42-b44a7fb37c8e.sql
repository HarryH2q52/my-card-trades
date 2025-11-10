-- Create profiles table for user data
create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  username text unique,
  avatar_url text,
  trader_rating integer default 0,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  primary key (id)
);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Allow everyone to view profiles (public trader profiles)
create policy "Profiles are viewable by everyone" 
on public.profiles 
for select 
using (true);

-- Users can insert their own profile
create policy "Users can insert their own profile" 
on public.profiles 
for insert 
with check (auth.uid() = id);

-- Users can update their own profile
create policy "Users can update their own profile" 
on public.profiles 
for update 
using (auth.uid() = id);

-- Create function to update timestamps
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql security definer set search_path = public;

-- Create trigger for automatic timestamp updates
create trigger set_updated_at
before update on public.profiles
for each row
execute function public.handle_updated_at();

-- Create function to handle new user signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, avatar_url, trader_rating)
  values (
    new.id,
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'avatar_url',
    0
  );
  return new;
end;
$$;

-- Trigger to create profile on user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();