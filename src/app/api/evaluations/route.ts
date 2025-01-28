import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// GET handler for fetching all evaluations
export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase
    .from("evaluations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST handler for creating a new evaluation
export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const body = await request.json();

  const { data, error } = await supabase
    .from("evaluations")
    .insert([body])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
