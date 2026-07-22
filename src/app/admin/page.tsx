import Wrapper from "@/components/Wrapper";
import db from "@/lib/db";
import { initDb } from "@/lib/schema";

// Ensure schema is initialized before query
try {
  initDb();
} catch(e) {
  console.log("DB init skipped or failed:", e);
}

export default async function AdminDashboard() {
  // Fetch from better-sqlite3 synchronously in this Server Component
  let services: any[] = [];
  try {
    services = db.prepare("SELECT * FROM services").all();
  } catch (e) {
    // If table doesn't exist yet
    services = [];
  }

  return (
    <div className="pt-32 pb-20 w-full flex-1 bg-slate-50 min-h-screen">
      <Wrapper>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-slate-500">Manage your CMS and leads powered by better-sqlite3.</p>
          </div>
          <a href="/api/seed" className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition">
            Seed Database
          </a>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <h3 className="font-semibold text-slate-900">Services Directory</h3>
          </div>
          <div className="p-0">
            {services.length === 0 ? (
              <p className="text-slate-500 text-sm text-center py-8">No services found. Click 'Seed Database'.</p>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase">Title</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase">Description</th>
                    <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase">Color</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s) => (
                    <tr key={s.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                      <td className="py-3 px-6 font-medium">{s.title}</td>
                      <td className="py-3 px-6 text-sm text-slate-500">{s.description}</td>
                      <td className="py-3 px-6">
                        <div className="w-6 h-6 rounded-full border border-slate-200" style={{ backgroundColor: s.color }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
