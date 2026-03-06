import { createClient, SupabaseClient } from "@supabase/supabase-js";

function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export { getSupabase };

export type WaitlistInsert = {
  full_name: string;
  email: string;
  interest: string;
  notes?: string | null;
};
