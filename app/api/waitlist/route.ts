import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as null | {
    name?: unknown;
    email?: unknown;
    platform?: unknown;
  };
  
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const platform = typeof body?.platform === "string" ? body.platform : "";

  if (!name) {
    return NextResponse.json(
      { ok: false, message: "Please enter your full name." },
      { status: 400 }
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!platform || (platform !== "iOS" && platform !== "Android")) {
    return NextResponse.json(
      { ok: false, message: "Please select your platform." },
      { status: 400 }
    );
  }

  // Check if Supabase is configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'https://placeholder.supabase.co' || supabaseAnonKey === 'placeholder-key') {
    console.error('Supabase environment variables not configured');
    return NextResponse.json(
      { ok: false, message: "Waitlist service is not configured. Please contact support." },
      { status: 500 }
    );
  }

  try {
    // Insert into Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert({ name, email, platform });

    if (error) {
      // Handle duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { ok: false, message: "This email is already on the waitlist." },
          { status: 400 }
        );
      }
      
      console.error('Supabase error:', error);
      return NextResponse.json(
        { ok: false, message: `Failed to join waitlist: ${error.message || 'Please try again.'}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      ok: true, 
      message: "You're on the list — we'll email you soon." 
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
