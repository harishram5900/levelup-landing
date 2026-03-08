import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const supabase = getSupabase();
    if (!supabase) {
      console.error("[waitlist] Supabase not configured: missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
      return NextResponse.json(
        { error: "Waitlist is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { full_name, email, interest, notes } = body;

    if (!email?.trim()) {
      console.error("[waitlist] Validation failed: email is required", { body });
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const insertData = {
      full_name: full_name?.trim() ?? "",
      email: email.trim().toLowerCase(),
      interest: interest?.trim() ?? "",
      notes: notes?.trim() || null,
    };

    console.log("[waitlist] Inserting:", { ...insertData, notes: insertData.notes ? "[present]" : null });

    const { error } = await supabase.from("waitlist").insert({
      full_name: insertData.full_name,
      email: insertData.email,
      interest: insertData.interest,
      notes: insertData.notes,
    });

    if (error) {
      console.error("[waitlist] Supabase insert error:", error.message, error.details, error.hint);
      return NextResponse.json(
        { error: error.message || "Failed to join waitlist. Please try again." },
        { status: 500 }
      );
    }

    console.log("[waitlist] Success:", insertData.email);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[waitlist] Unexpected error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
