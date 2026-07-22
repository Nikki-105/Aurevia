import { Metadata } from "next";
import Wrapper from "@/components/Wrapper";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Internal dashboard for Aurevia Studio.",
};

export default function AdminPage() {
  return (
    <div className="pt-32 pb-20 w-full flex-1">
      <Wrapper>
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-slate-500">Manage your CMS and leads.</p>
        </div>
        <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold">
          Add New Post
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-slate-500 text-sm font-semibold mb-2">Total Projects</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-slate-500 text-sm font-semibold mb-2">Active Leads</h3>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-slate-500 text-sm font-semibold mb-2">Services Listed</h3>
          <p className="text-3xl font-bold">15</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h3 className="font-semibold text-slate-900">Recent Leads</h3>
        </div>
        <div className="p-6">
          <p className="text-slate-500 text-sm text-center py-8">No new leads to display. SQLite database is ready.</p>
        </div>
      </div>
      </Wrapper>
    </div>
  );
}
