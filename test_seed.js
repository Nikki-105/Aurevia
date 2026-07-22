const db = require('better-sqlite3')('./aurevia-cms.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT,
      client TEXT,
      year INTEGER,
      image_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT,
      icon TEXT,
      color TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      message TEXT,
      status TEXT DEFAULT 'new',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS lead_activity (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lead_id INTEGER NOT NULL,
      action TEXT NOT NULL,
      details TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(lead_id) REFERENCES leads(id) ON DELETE CASCADE
    );
`);

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

try {
    db.prepare('DELETE FROM lead_activity').run();
    db.prepare('DELETE FROM leads').run();
    for (const lead of leads) {
      const info = insertLead.run(lead);
      const leadId = info.lastInsertRowid;
      insertActivity.run({ lead_id: leadId, action: "Lead Created", details: "Lead submitted via contact form.", created_at: new Date(Date.now() - 100000000).toISOString() });
      if (lead.status !== "new") {
        insertActivity.run({ lead_id: leadId, action: "Status Changed", details: \`Moved to \${lead.status}\`, created_at: new Date(Date.now() - 50000000).toISOString() });
      }
      insertActivity.run({ lead_id: leadId, action: "Viewed", details: "Admin viewed lead details.", created_at: new Date().toISOString() });
    }
    console.log("Success");
} catch(e) {
    console.error("ERROR:", e);
}
