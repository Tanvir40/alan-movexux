// src/app/api/ping/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl.searchParams.get("url") || "https://movexos.com/sitemap.xml";

    // Placeholder: pinga Google
    await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(url)}`);
    console.log(`Pinged Google for sitemap: ${url}`);

    return NextResponse.json({ success: true, message: `Pinged Google for ${url}` });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Error pinging Google" }, { status: 500 });
  }
}