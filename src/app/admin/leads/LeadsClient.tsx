"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Building, Clock, Activity, ArrowRight, User, Tag } from "lucide-react";

export default function LeadsClient({ initialLeads }: { initialLeads: any[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLead, setSelectedLead] = useState<any | null>(null);

  const columns = [
    { id: "new", title: "New Inquiries", color: "text-cyan-600", border: "border-cyan-200", bg: "bg-cyan-50" },
    { id: "in_progress", title: "In Progress", color: "text-purple-600", border: "border-purple-200", bg: "bg-purple-50" },
    { id: "converted", title: "Converted", color: "text-emerald-600", border: "border-emerald-200", bg: "bg-emerald-50" },
  ];

  const moveLead = (id: number, newStatus: string) => {
    // Optimistic UI update
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    // We would fire an API call to update the DB here
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Leads CRM</h1>
        <p className="text-slate-500">Manage client relationships and track activity history.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {columns.map((col) => (
          <div key={col.id} className={`bg-slate-50/50 border border-slate-200 rounded-3xl p-6 flex flex-col h-full`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-lg font-bold ${col.color}`}>{col.title}</h3>
              <div className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${col.border} ${col.bg} ${col.color}`}>
                {leads.filter(l => l.status === col.id).length}
              </div>
            </div>

            <div className="flex-1 space-y-4">
              {leads.filter(l => l.status === col.id).map(lead => (
                <motion.div
                  layoutId={`lead-card-${lead.id}`}
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className="bg-white border border-slate-200 p-5 rounded-2xl cursor-pointer hover:border-cyan-300 transition group shadow-sm hover:shadow-md"
                >
                  <h4 className="text-slate-900 font-semibold mb-1 group-hover:text-cyan-600 transition">{lead.name}</h4>
                  
                  {lead.tags && (
                    <div className="mb-2">
                      <span className="inline-block px-2 py-0.5 bg-rose-50 text-rose-600 border border-rose-200 text-[10px] font-bold rounded-md uppercase tracking-wider">
                        {lead.tags}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <Building size={12} />
                    {lead.company || "No Company"}
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-2">{lead.message}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Luxurious Modal for Lead Details */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              layoutId={`lead-card-${selectedLead.id}`}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              <button 
                onClick={() => setSelectedLead(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 hover:scale-105 transition-all z-10"
              >
                <X size={18} />
              </button>

              {/* Left Column: Details */}
              <div className="flex-1 p-12 border-b lg:border-b-0 lg:border-r border-slate-200 overflow-y-auto">
                <div className="mb-10">
                  <span className="px-4 py-1.5 bg-cyan-50 border border-cyan-200 text-cyan-600 text-xs font-bold rounded-full uppercase tracking-wider">
                    {selectedLead.status.replace("_", " ")}
                  </span>
                </div>
                
                <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">{selectedLead.name}</h2>
                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Building size={18} className="text-cyan-500" />
                    <span className="text-lg">{selectedLead.company || "Independent"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Mail size={18} className="text-purple-500" />
                    <span className="text-lg">{selectedLead.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 mt-2">
                    <Tag size={18} className="text-rose-400" />
                    <input 
                      type="text" 
                      placeholder="Add a custom tag (e.g. VIP, Urgent)..."
                      className="text-lg bg-transparent border-b border-dashed border-slate-300 focus:border-cyan-500 outline-none text-slate-900 placeholder:text-slate-400 min-w-[250px] transition-colors"
                      value={selectedLead.tags || ""}
                      onChange={(e) => {
                        const newTag = e.target.value;
                        setSelectedLead({ ...selectedLead, tags: newTag });
                        setLeads(leads.map(l => l.id === selectedLead.id ? { ...l, tags: newTag } : l));
                      }}
                    />
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 blur-3xl rounded-full" />
                  <h4 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                    <Activity size={14} /> Message Request
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-lg relative z-10">{selectedLead.message}</p>
                </div>

                {/* Actions */}
                <div className="mt-12 flex gap-4">
                  {columns.map(col => (
                    selectedLead.status !== col.id && (
                      <button
                        key={col.id}
                        onClick={() => {
                          moveLead(selectedLead.id, col.id);
                          setSelectedLead(null);
                        }}
                        className="flex-1 py-4 px-6 rounded-2xl bg-white border border-slate-200 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition shadow-sm flex justify-between items-center group"
                      >
                        Move to {col.title}
                        <ArrowRight size={16} className="text-slate-400 group-hover:text-cyan-500 transition group-hover:translate-x-1" />
                      </button>
                    )
                  ))}
                </div>
              </div>

              {/* Right Column: Activity History */}
              <div className="w-full lg:w-[400px] bg-slate-50/50 p-12 overflow-y-auto relative">
                <h3 className="text-xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                  <Clock size={20} className="text-cyan-500" />
                  Activity History
                </h3>
                
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute top-0 bottom-0 left-[11px] w-px bg-gradient-to-b from-cyan-200 to-transparent" />
                  
                  <div className="space-y-10">
                    {selectedLead.activity?.map((act: any, i: number) => (
                      <div key={i} className="relative pl-10">
                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-[3px] border-cyan-400 flex items-center justify-center shadow-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-semibold mb-1.5">{act.action}</p>
                          <p className="text-sm text-slate-600 mb-3">{act.details}</p>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-white border border-slate-200 inline-flex px-2.5 py-1 rounded-md">
                            {new Date(act.created_at).toLocaleString(undefined, { 
                              month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {(!selectedLead.activity || selectedLead.activity.length === 0) && (
                      <p className="text-slate-500 text-sm pl-10">No activity recorded yet.</p>
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
