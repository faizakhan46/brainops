"use client";

import { useRouter } from "next/navigation";
import { Bell, Search, ChevronDown, LogOut } from "lucide-react";

import { supabase } from "@/lib/supabase";

export default function Topbar() {
  const router = useRouter();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
      router.refresh();
    }
  }

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#0F1115]/80 px-8 backdrop-blur-xl">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-white/10 bg-[#17191D] py-3 pl-11 pr-4 text-white outline-none transition focus:border-[#4F8A8B]"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative rounded-xl bg-[#17191D] p-3 text-slate-300 transition hover:text-white">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* User */}
        <button className="flex items-center gap-3 rounded-xl bg-[#17191D] px-3 py-2 transition hover:bg-[#1D2127]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4F8A8B] font-semibold text-white">
            F
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-white">
              Faiza
            </p>

            <p className="text-xs text-slate-400">
              Administrator
            </p>
          </div>

          <ChevronDown
            size={18}
            className="text-slate-500"
          />
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}