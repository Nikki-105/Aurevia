"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";
import { ShoppingCart, Printer, Bell, CreditCard, MoreVertical, ArrowDown, ArrowUp } from "lucide-react";

// MOCK DATA
const weeklyData = [
  { name: "Mon", value: 4000 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 5000 },
  { name: "Thu", value: 4500 },
  { name: "Fri", value: 7000 },
  { name: "Sat", value: 6500 },
  { name: "Sun", value: 9000 },
  { name: "Mon", value: 6000 },
  { name: "Tue", value: 4000 },
];

const trafficData = [
  { name: "1", v: 20 }, { name: "2", v: 25 }, { name: "3", v: 40 }, { name: "4", v: 55 },
  { name: "5", v: 45 }, { name: "6", v: 35 }, { name: "7", v: 30 }, { name: "8", v: 25 }, { name: "9", v: 20 }
];

const revenueProposalsData = [
  { name: "Jan", sales: 20, views: 18 },
  { name: "Feb", sales: 5, views: 10 },
  { name: "Mar", sales: 60, views: 45 },
  { name: "Apr", sales: 10, views: 15 },
  { name: "May", sales: 30, views: 25 },
  { name: "Jun", sales: 20, views: 15 },
  { name: "Jul", sales: 25, views: 40 },
  { name: "Aug", sales: 15, views: 10 },
  { name: "Sep", sales: 30, views: 22 },
];

export default function AdminDashboard() {
  return (
    <div className="w-full space-y-6">
      
      {/* ROW 1 */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Weekly Revenue */}
        <div className="xl:col-span-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-3xl font-bold text-slate-800 tracking-tight">$9,568</h2>
              <span className="flex items-center text-xs font-semibold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-md">
                <ArrowDown size={12} className="mr-0.5" /> 8.6%
              </span>
            </div>
            <p className="text-sm text-slate-400 font-medium">Average Weekly Revenue</p>
          </div>
          <div className="h-28 mt-4 -mx-2 -mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 4 Metrics Block */}
        <div className="xl:col-span-8 bg-white border border-slate-100 rounded-2xl shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100 p-2">
          <div className="p-6 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-3">
              <ShoppingCart size={18} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">85,246</h3>
            <p className="text-xs text-slate-400 font-medium mt-1">Projects</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-3">
              <Printer size={18} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">$96,147</h3>
            <p className="text-xs text-slate-400 font-medium mt-1">Income</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-3">
              <Bell size={18} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">846</h3>
            <p className="text-xs text-slate-400 font-medium mt-1">Active Leads</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500 mb-3">
              <CreditCard size={18} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">$84,472</h3>
            <p className="text-xs text-slate-400 font-medium mt-1">Retainers</p>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Total Traffic */}
        <div className="xl:col-span-3 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col relative">
          <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
            <MoreVertical size={16} />
          </button>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-slate-800">97.4K</h2>
            <p className="text-xs text-slate-400 font-medium">Total Traffic</p>
          </div>
          <div className="h-32 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficData}>
                <Bar dataKey="v" fill="#ef4444" radius={[4, 4, 4, 4]} barSize={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4 font-medium"><span className="text-emerald-500">12.5%</span> from last month</p>
        </div>

        {/* Client Retention (Gauge) */}
        <div className="xl:col-span-3 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col relative">
          <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
            <MoreVertical size={16} />
          </button>
          <div className="mb-2">
            <h2 className="text-2xl font-bold text-slate-800">42.5K</h2>
            <p className="text-xs text-slate-400 font-medium">Active Clients</p>
          </div>
          
          <div className="flex-1 flex items-center justify-center relative mt-4">
            <div className="w-full h-32 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[{ value: 78 }, { value: 22 }]}
                    cx="50%"
                    cy="80%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={70}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={5}
                  >
                    <Cell fill="url(#gradientGauge)" />
                    <Cell fill="#f1f5f9" />
                  </Pie>
                  <defs>
                    <linearGradient id="gradientGauge" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#e81cff" />
                    </linearGradient>
                  </defs>
                </PieChart>
              </ResponsiveContainer>
              <span className="absolute bottom-4 text-2xl font-bold text-slate-800">78%</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4 font-medium">24K users increased from last month</p>
        </div>

        {/* Revenue & Proposals */}
        <div className="xl:col-span-6 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col relative">
          <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
            <MoreVertical size={16} />
          </button>
          <h3 className="text-sm font-bold text-slate-800 mb-6">Revenue & Proposals</h3>
          
          <div className="h-48 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueProposalsData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={12} name="Revenue" />
                <Bar dataKey="views" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={12} name="Proposals" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              <span className="flex items-center gap-1 text-[10px] text-slate-500 font-medium"><div className="w-2 h-2 bg-blue-500 rounded-[2px]" /> Revenue</span>
              <span className="flex items-center gap-1 text-[10px] text-slate-500 font-medium"><div className="w-2 h-2 bg-purple-500 rounded-[2px]" /> Proposals</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            {/* Monthly */}
            <div className="flex items-center justify-center gap-4 border border-slate-100 rounded-xl p-3">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{v:65},{v:35}]} cx="50%" cy="50%" innerRadius={18} outerRadius={24} dataKey="v" stroke="none" cornerRadius={2}>
                      <Cell fill="#3b82f6" /><Cell fill="#f1f5f9" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Monthly</p>
                <h4 className="text-lg font-bold text-slate-800">65,127</h4>
                <p className="text-[10px] font-medium text-emerald-500">16.5% <span className="text-slate-400">55.21 USD</span></p>
              </div>
            </div>
            
            {/* Yearly */}
            <div className="flex items-center justify-center gap-4 border border-slate-100 rounded-xl p-3">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{v:24},{v:76}]} cx="50%" cy="50%" innerRadius={18} outerRadius={24} dataKey="v" stroke="none" cornerRadius={2}>
                      <Cell fill="#8b5cf6" /><Cell fill="#f1f5f9" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Yearly</p>
                <h4 className="text-lg font-bold text-slate-800">984,246</h4>
                <p className="text-[10px] font-medium text-emerald-500">24.9% <span className="text-slate-400">267.35 USD</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Sales This Year (Progress Bar) */}
        <div className="xl:col-span-6 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative">
          <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
            <MoreVertical size={16} />
          </button>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-slate-800">$65,129</h2>
                <span className="flex items-center text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <ArrowUp size={12} className="mr-0.5" /> 8.6%
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium mt-1">Annual Goal Progress</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
              <span>285 left to Goal</span>
              <span className="font-bold text-slate-700">78%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "78%" }}></div>
            </div>
          </div>
        </div>

        {/* Blank placeholders to match layout bottom */}
        <div className="xl:col-span-3 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm h-32 flex flex-col justify-between relative">
           <h3 className="text-sm font-bold text-slate-800">Ongoing Projects</h3>
           <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><MoreVertical size={16}/></button>
        </div>
        <div className="xl:col-span-3 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm h-32 flex flex-col justify-between relative">
           <h3 className="text-sm font-bold text-slate-800">Campaign</h3>
           <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><MoreVertical size={16}/></button>
        </div>
      </div>
    </div>
  );
}
