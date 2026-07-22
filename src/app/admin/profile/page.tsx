import db from "@/lib/db";
import ProfileClient from "./ProfileClient";

export default function ProfilePage() {
  let team = [];
  try {
    team = db.prepare("SELECT * FROM team ORDER BY created_at ASC").all();
  } catch (e) {
    console.error("Failed to fetch team:", e);
  }

  return <ProfileClient initialTeam={team} />;
}
