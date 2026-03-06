# LevelUp Landing Page

Premium startup landing page for LevelUp — one ecosystem for creator growth and productivity.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **Supabase** (waitlist storage)

## Environment variables

Create a `.env.local` in the project root with:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL (e.g. `https://xxxxx.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key |

Copy from [Supabase](https://supabase.com/dashboard) → your project → **Settings** → **API** → Project URL and anon key.

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In the **Table Editor**, create a table named **waitlist** with columns:

   | Column     | Type                     | Default / Notes        |
   |-----------|--------------------------|------------------------|
   | `id`      | `uuid`                   | Primary key, default: `gen_random_uuid()` |
   | `created_at` | `timestamptz`        | default: `now()`       |
   | `full_name`  | `text`                | not null               |
   | `email`      | `text`                | not null               |
   | `interest`   | `text`                | not null               |
   | `notes`      | `text`                | nullable               |

3. In **Authentication** → **Policies**, add a policy so the anon key can insert into `waitlist`:

   - Policy name: `Allow anonymous insert into waitlist`
   - Operation: **INSERT**
   - Target: table `waitlist`
   - Expression: `true` (or restrict by role if you prefer)

   Or run in **SQL Editor**:

   ```sql
   create table if not exists public.waitlist (
     id uuid primary key default gen_random_uuid(),
     created_at timestamptz default now(),
     full_name text not null,
     email text not null,
     interest text not null,
     notes text
   );

   alter table public.waitlist enable row level security;

   create policy "Allow anon insert"
     on public.waitlist for insert
     to anon
     with check (true);
   ```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push the project to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and **Import** the repository.
3. In **Project Settings** → **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy. Vercel will run `next build` and serve the app.

## Project structure

```
levelup-landing/
├── app/
│   ├── api/waitlist/route.ts   # Waitlist API
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx           # Custom 404
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Logo.tsx
│   ├── Hero.tsx
│   ├── Ecosystem.tsx
│   ├── ProductCards.tsx
│   ├── FeaturesGrid.tsx
│   ├── HowItWorks.tsx
│   ├── Reviews.tsx
│   ├── Team.tsx
│   ├── WaitlistForm.tsx
│   ├── WaitlistSection.tsx
│   └── Footer.tsx
├── lib/
│   └── supabase.ts
├── public/
│   └── levelup-logo.png        # Optional; fallback to "L" if missing
├── .env.local.example
├── .eslintrc.json
├── .gitignore
└── README.md
```
