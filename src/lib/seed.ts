import db from "./db";
import { initDb } from "./schema";

export function seedDb() {
  initDb();

  // Seed Services
  const insertService = db.prepare(`
    INSERT OR IGNORE INTO services (title, slug, description, icon, color)
    VALUES (@title, @slug, @description, @icon, @color)
  `);

  const services = [
    { title: "Premium Websites", slug: "premium-websites", description: "Pixel-perfect, award-winning websites.", icon: "Code2", color: "#2563EB" },
    { title: "AI Automation", slug: "ai-automation", description: "Custom AI workflows that eliminate repetitive tasks.", icon: "Cpu", color: "#3b82f6" },
  ];

  const insertServicesTx = db.transaction((servicesData) => {
    for (const service of servicesData) {
      insertService.run(service);
    }
  });

  insertServicesTx(services);

  // Seed Leads
  const insertLead = db.prepare(`
    INSERT INTO leads (name, email, company, message, status)
    VALUES (@name, @email, @company, @message, @status)
  `);

  const insertActivity = db.prepare(`
    INSERT INTO lead_activity (lead_id, action, details, created_at)
    VALUES (@lead_id, @action, @details, @created_at)
  `);

  const leads = [
    { name: "Sarah Jenkins", email: "sarah@acmecorp.com", company: "Acme Corp", message: "We need a complete rebrand.", status: "new" },
    { name: "David Chen", email: "david@startup.io", company: "Startup.io", message: "Looking for an AI integration.", status: "in_progress" },
    { name: "Emily Blunt", email: "emily@ecommerce.net", company: "E-Commerce Net", message: "Help us build a premium store.", status: "converted" }
  ];

  const insertLeadsTx = db.transaction((leadsData) => {
    // Clear old data for a fresh seed
    db.prepare('DELETE FROM lead_activity').run();
    db.prepare('DELETE FROM leads').run();

    for (const lead of leadsData) {
      const info = insertLead.run(lead);
      const leadId = info.lastInsertRowid;
      
      // Add mock history for each lead
      insertActivity.run({ lead_id: leadId, action: "Lead Created", details: "Lead submitted via contact form.", created_at: new Date(Date.now() - 100000000).toISOString() });
      if (lead.status !== "new") {
        insertActivity.run({ lead_id: leadId, action: "Status Changed", details: `Moved to ${lead.status}`, created_at: new Date(Date.now() - 50000000).toISOString() });
      }
      insertActivity.run({ lead_id: leadId, action: "Viewed", details: "Admin viewed lead details.", created_at: new Date().toISOString() });
    }
  });

  insertLeadsTx(leads);

  // Seed Team
  const insertTeam = db.prepare(`
    INSERT INTO team (name, role, bio, image_url)
    VALUES (@name, @role, @bio, @image_url)
  `);

  const team = [
    { name: "Henry Barbara", role: "CEO & Co-founder", bio: "Visionary leader with 10+ years in design.", image_url: "https://i.pravatar.cc/150?u=henry" },
    { name: "Sarah Jenkins", role: "Lead Developer", bio: "Full-stack expert specializing in React.", image_url: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Michael Doe", role: "Creative Director", bio: "Award-winning designer with a passion for minimalism.", image_url: "https://i.pravatar.cc/150?u=michael" }
  ];

  const insertTeamTx = db.transaction((teamData) => {
    db.prepare('DELETE FROM team').run();
    for (const member of teamData) {
      insertTeam.run(member);
    }
  });

  insertTeamTx(team);

  console.log("Database seeded successfully.");
}
