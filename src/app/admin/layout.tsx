"use client";

import { LayoutDashboard, Users, Folders, LogOut, Bell, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const [notifications, setNotifications] = useState([
    { title: "New Lead Received", desc: "David Chen submitted a request.", time: "10 mins ago" },
    { title: "Project Updated", desc: "Acme Rebrand was modified.", time: "1 hr ago" },
    { title: "System Update", desc: "OS version 2.0 deployed.", time: "2 hrs ago" }
  ]);

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Leads CRM", href: "/admin/leads", icon: Users },
    { name: "Projects", href: "/admin/projects", icon: Folders },
  ];
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-600 font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-slate-200/60 bg-white relative z-20">
        {/* Brand */}
        <div className="h-[72px] flex items-center px-8 border-b border-slate-200/60">
          <span className="text-xl font-black text-slate-900 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-700 flex items-center justify-center text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
            </div>
            Aurevia
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-2">
          {navItems.map((item) => {
            const isActive = item.href === "/admin" 
              ? pathname === "/admin" 
              : pathname?.startsWith(item.href);
              
            return (
              <Link 
                key={item.name}
                href={item.href} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                  isActive 
                    ? "bg-white text-slate-900 border border-slate-200/60 shadow-sm" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <item.icon size={18} className={isActive ? "text-cyan-500" : ""} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200/60">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition font-medium">
            <LogOut size={18} />
            Exit OS
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative h-screen overflow-hidden">
        {/* Header */}
        <header className="h-[72px] border-b border-slate-200/60 bg-white flex items-center justify-between px-8 z-[999]">
          
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-full max-w-md hidden md:block">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Search.." className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all" />
            </div>
          </div>
          <div className="flex items-center gap-6 relative">
            
            {/* Notifications Toggle */}
            <div className="relative">
              <button 
                onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }}
                className={`transition relative ${isNotifOpen ? "text-cyan-600" : "text-slate-400 hover:text-slate-900"}`}
              >
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full" />
              </button>

              <AnimatePresence>
                {isNotifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-4 w-80 bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden z-[1000]"
                  >
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                      <h4 className="font-bold text-slate-900">Notifications</h4>
                      <button 
                        onClick={() => setNotifications([])}
                        className="text-xs text-cyan-600 hover:text-cyan-700 font-medium"
                      >
                        Mark all read
                      </button>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-8 text-center text-slate-500 text-sm">
                          No new notifications.
                        </div>
                      ) : (
                        notifications.map((n, i) => (
                          <div key={i} className="p-4 border-b border-slate-50 hover:bg-slate-50 transition cursor-pointer">
                            <p className="text-sm font-semibold text-slate-900">{n.title}</p>
                            <p className="text-xs text-slate-500 mt-1">{n.desc}</p>
                            <p className="text-[10px] text-slate-400 mt-2">{n.time}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Toggle */}
            <div className="relative">
              <button 
                onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-[2px] hover:scale-105 transition transform"
              >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-900">A</span>
                </div>
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-4 w-64 bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden z-50 p-2"
                  >
                    <div className="p-3 mb-2 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-[2px]">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-slate-900">A</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Admin User</p>
                        <p className="text-xs text-slate-500">admin@aurevia.com</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <Link 
                        href="/admin/profile"
                        onClick={() => setIsProfileOpen(false)}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-cyan-600 rounded-xl transition"
                      >
                        <User size={16} /> My Profile
                      </Link>
                      <button 
                        onClick={() => {
                          alert("Opening global preferences modal...");
                          setIsProfileOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-cyan-600 rounded-xl transition"
                      >
                        <Settings size={16} /> Preferences
                      </button>
                    </div>

                    <div className="border-t border-slate-100 mt-2 pt-2">
                      <Link href="/" className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-xl transition">
                        <LogOut size={16} /> Sign Out
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {children}
        </div>
      </main>

      {/* Global CSS for scrollbar inside OS */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
