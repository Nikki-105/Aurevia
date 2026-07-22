"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, User, Mail, Shield, Building, Camera, Edit2, Trash2 } from "lucide-react";

export default function ProfileClient({ initialTeam }: { initialTeam: any[] }) {
  const [team, setTeam] = useState(initialTeam);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Admin State
  const [adminInfo, setAdminInfo] = useState({ name: "Admin User", email: "admin@aurevia.com" });
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [editAdminName, setEditAdminName] = useState("");
  const [editAdminEmail, setEditAdminEmail] = useState("");

  // Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSaveMember = () => {
    if (!name || !role) return;
    
    if (editingId) {
      setTeam(team.map(m => m.id === editingId ? {
        ...m,
        name,
        role,
        bio,
        image_url: imageUrl || `https://i.pravatar.cc/150?u=${name}`
      } : m));
    } else {
      const newMember = {
        id: Date.now(),
        name,
        role,
        bio,
        image_url: imageUrl || `https://i.pravatar.cc/150?u=${name}`
      };
      setTeam([...team, newMember]);
    }

    setIsModalOpen(false);
    setEditingId(null);
    setName("");
    setRole("");
    setBio("");
    setImageUrl("");
  };

  const handleEdit = (member: any) => {
    setEditingId(member.id);
    setName(member.name);
    setRole(member.role);
    setBio(member.bio || "");
    setImageUrl(member.image_url || "");
    setIsModalOpen(true);
  };

  const handleOpenAdd = () => {
    setEditingId(null);
    setName("");
    setRole("");
    setBio("");
    setImageUrl("");
    setIsModalOpen(true);
  };

  const handleRemove = (id: number) => {
    setTeam(team.filter(m => m.id !== id));
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">My Profile & Team</h1>
        <p className="text-slate-500">Manage your personal settings and agency members.</p>
      </div>

      {/* Admin Profile Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-end mt-12">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold overflow-hidden relative">
                {adminInfo.name.charAt(0)}
                <button 
                  onClick={() => alert("Avatar upload functionality will be integrated with cloud storage.")}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer w-full h-full"
                >
                  <Camera size={24} className="text-white" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 right-2 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full" />
          </div>

          {/* Details */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-1">{adminInfo.name}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
              <span className="flex items-center gap-1.5"><Shield size={16} className="text-cyan-600"/> Super Admin</span>
              <span className="flex items-center gap-1.5"><Mail size={16} /> {adminInfo.email}</span>
              <span className="flex items-center gap-1.5"><Building size={16} /> Aurevia Studio</span>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">Design</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">Development</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">Strategy</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button 
              onClick={() => alert(`A password reset link has been sent to ${adminInfo.email}.`)}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
            >
              Change Password
            </button>
            <button 
              onClick={() => {
                setEditAdminName(adminInfo.name);
                setEditAdminEmail(adminInfo.email);
                setIsAdminModalOpen(true);
              }}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white font-medium transition shadow-sm"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Team Management */}
      <div className="flex justify-between items-end mb-6 pt-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Team Roster</h3>
          <p className="text-sm text-slate-500">Manage members displayed on the main website.</p>
        </div>
        <button 
          onClick={handleOpenAdd}
          className="flex items-center gap-2 bg-slate-900 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl transition-colors font-medium shadow-sm"
        >
          <Plus size={18} /> Add Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-200 rounded-3xl p-6 relative group shadow-sm hover:shadow-md transition-all"
          >
            {/* Hover Actions */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => handleEdit(member)}
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:border-cyan-200 transition"
              >
                <Edit2 size={14} />
              </button>
              <button 
                onClick={() => handleRemove(member.id)}
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-red-500 hover:border-red-200 transition"
              >
                <Trash2 size={14} />
              </button>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-sm">
                <img src={member.image_url} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
              <p className="text-sm font-semibold text-cyan-600 mb-3">{member.role}</p>
              <p className="text-sm text-slate-500 line-clamp-3">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Member Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
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
              className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl p-8"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {editingId ? "Edit Team Member" : "Add Team Member"}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" 
                    placeholder="e.g. Jane Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Role / Designation</label>
                  <input 
                    type="text" 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" 
                    placeholder="e.g. Lead Designer" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Avatar Image URL (Optional)</label>
                  <input 
                    type="text" 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" 
                    placeholder="https://..." 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Short Bio</label>
                  <textarea 
                    rows={3} 
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition resize-none" 
                    placeholder="Describe their expertise..." 
                  />
                </div>
                <button 
                  onClick={handleSaveMember}
                  className="w-full bg-slate-900 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl transition mt-4"
                >
                  {editingId ? "Save Changes" : "Add Member"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Edit Admin Modal */}
      <AnimatePresence>
        {isAdminModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdminModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl p-8"
            >
              <button 
                onClick={() => setIsAdminModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Edit Profile</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    value={editAdminName}
                    onChange={(e) => setEditAdminName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    value={editAdminEmail}
                    onChange={(e) => setEditAdminEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition" 
                  />
                </div>
                <button 
                  onClick={() => {
                    setAdminInfo({ name: editAdminName, email: editAdminEmail });
                    setIsAdminModalOpen(false);
                  }}
                  className="w-full bg-slate-900 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl transition mt-4"
                >
                  Save Profile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
