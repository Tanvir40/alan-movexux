// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Contact form submitted:", body);

    // Placeholder: här kan du lägga till email-sändning eller Sanity lagring

    return NextResponse.json({ success: true, message: "Contact form submitted" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Error submitting contact form" }, { status: 500 });
  }
}
