import { seedDb } from "@/lib/seed";
import db from "@/lib/db";

// This is just a quick API to seed the database
export async function GET() {
  try {
    seedDb();
    return Response.json({ success: true, message: "Database seeded." });
  } catch (error: any) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
