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

  console.log("Database seeded successfully.");
}
