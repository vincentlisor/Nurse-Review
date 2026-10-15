-- Run this once in the Supabase SQL editor.
-- It creates a separate score table so it does not touch other tables in the project.

create table if not exists public.ncm_scores (
  id bigint generated always as identity primary key,
  name text not null,
  name_key text not null,
  label text not null,
  correct integer not null,
  total integer not null,
  percent integer not null,
  seconds integer not null,
  created_at timestamptz not null default now(),
  constraint ncm_scores_name_len check (char_length(name) between 2 and 24),
  constraint ncm_scores_key check (name_key = lower(name)),
  constraint ncm_scores_label check (char_length(label) between 1 and 60),
  constraint ncm_scores_counts check (correct >= 0 and total between 1 and 300 and correct <= total),
  constraint ncm_scores_percent check (percent = round((correct::numeric * 100) / total)::integer),
  constraint ncm_scores_seconds check (seconds between 1 and 86400)
);

create index if not exists idx_ncm_scores_key on public.ncm_scores (name_key);

alter table public.ncm_scores enable row level security;

drop policy if exists "Public read ncm scores" on public.ncm_scores;
drop policy if exists "Public insert ncm scores" on public.ncm_scores;

create policy "Public read ncm scores"
  on public.ncm_scores for select
  to anon, authenticated
  using (true);

create policy "Public insert ncm scores"
  on public.ncm_scores for insert
  to anon, authenticated
  with check (true);
