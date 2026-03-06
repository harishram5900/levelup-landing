import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json(
        { error: "Waitlist is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { full_name, email, interest, notes } = body;

    if (!full_name?.trim() || !email?.trim() || !interest?.trim()) {
      return NextResponse.json(
        { error: "Full name, email, and interest are required." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("waitlist").insert({
      full_name: full_name.trim(),
      email: email.trim().toLowerCase(),
      interest: interest.trim(),
      notes: notes?.trim() || null,
    });

    if (error) {
      console.error("Supabase waitlist insert error:", error);
      return NextResponse.json(
        { error: "Failed to join waitlist. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Waitlist API error:", e);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
