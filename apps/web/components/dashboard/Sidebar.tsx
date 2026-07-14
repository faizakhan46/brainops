"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  Database,
  Workflow,
  Users,
  BarChart3,
  CreditCard,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "AI Chatbots", href: "/dashboard/chatbot", icon: Bot },
  { name: "Knowledge Base", href: "/dashboard/knowledge", icon: Database },
  { name: "Workflows", href: "/dashboard/workflows", icon: Workflow },
  { name: "CRM", href: "/dashboard/crm", icon: Users },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-[#0F1115]">
      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-bold text-white">
          Brain<span className="text-[#4F8A8B]">Ops</span>
        </h1>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-[#4F8A8B] text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}