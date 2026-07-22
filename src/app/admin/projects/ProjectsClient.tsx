"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Folder, Calendar, User, Image as ImageIcon } from "lucide-react";

export default function ProjectsClient({ initialProjects }: { initialProjects: any[] }) {
  const [projects, setProjects] = useState(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [newTitle, setNewTitle] = useState("");
  const [newClient, setNewClient] = useState("");
  const [newYear, setNewYear] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const handleSave = () => {
    if (!newTitle) return;
    const newProject = {
      id: Date.now(),
      title: newTitle,
      client: newClient,
      year: newYear,
      description: newDesc,
      image_url: ""
    };
    setProjects([newProject, ...projects]);
    setIsModalOpen(false);
    setNewTitle("");
    setNewClient("");
    setNewYear("");
    setNewDesc("");
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Projects Manager</h1>
          <p className="text-slate-500">Manage your premium portfolio and case studies.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-slate-900 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl transition-colors font-medium shadow-sm hover:shadow-md"
        >
          <Plus size={18} />
          New Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="flex-1 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400 p-12">
          <Folder size={48} className="mb-4 text-slate-300" />
          <h3 className="text-xl font-bold text-slate-700 mb-2">No Projects Found</h3>
          <p className="text-center max-w-sm mb-6 text-slate-500">You haven't added any projects to your portfolio yet. Create your first project to showcase your work.</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-xl transition-colors font-medium"
          >
            <Plus size={18} />
            Create Project
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
            >
              <div className="aspect-video bg-slate-100 relative overflow-hidden flex items-center justify-center">
                {project.image_url ? (
                  <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <ImageIcon size={32} className="text-slate-300" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">Edit Project</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{project.title}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{project.description}</p>
                <div className="mt-auto flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1"><User size={12}/> {project.client || "No Client"}</span>
                  <span className="flex items-center gap-1"><Calendar size={12}/> {project.year || "N/A"}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Simple Create Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl p-8"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Create New Project</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Project Title</label>
                  <input 
                    type="text" 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" 
                    placeholder="e.g. Acme Rebrand" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Client Name</label>
                    <input 
                      type="text" 
                      value={newClient}
                      onChange={(e) => setNewClient(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" 
                      placeholder="Acme Corp" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Year</label>
                    <input 
                      type="text" 
                      value={newYear}
                      onChange={(e) => setNewYear(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" 
                      placeholder="2026" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                  <textarea 
                    rows={3} 
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition resize-none" 
                    placeholder="Brief project description..." 
                  />
                </div>
                <button 
                  onClick={handleSave}
                  className="w-full bg-slate-900 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl transition mt-4"
                >
                  Save Project
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
