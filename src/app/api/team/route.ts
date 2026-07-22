import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const team = db.prepare("SELECT * FROM team ORDER BY created_at ASC").all();
    return NextResponse.json({ team });
  } catch (error) {
    console.error("Failed to fetch team:", error);
    return NextResponse.json({ team: [] }, { status: 500 });
  }
}
