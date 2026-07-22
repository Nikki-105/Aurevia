import db from "@/lib/db";
import LeadsClient from "./LeadsClient";

export default function LeadsPage() {
  let leads = [];
  try {
    leads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
    
    // Fetch activity for each lead
    const getActivity = db.prepare("SELECT * FROM lead_activity WHERE lead_id = ? ORDER BY created_at DESC");
    leads = leads.map((lead: any) => ({
      ...lead,
      activity: getActivity.all(lead.id)
    }));
  } catch(e) {
    console.error("Failed to fetch leads:", e);
  }

  return <LeadsClient initialLeads={leads} />;
}
