"use client";

import Link from "next/link";
import { Bot, ArrowRight } from "lucide-react";

interface ChatbotCardProps {
  id: string;
  name: string;
  description: string;
}

export default function ChatbotCard({
  id,
  name,
  description,
}: ChatbotCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111315] p-6 transition hover:border-[#4F8A8B]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4F8A8B]/10">
        <Bot className="text-[#4F8A8B]" />
      </div>

      <h3 className="text-xl font-semibold text-white">
        {name}
      </h3>

      <p className="mt-3 text-sm text-slate-400">
        {description || "No description provided."}
      </p>

      <Link
        href={`/dashboard/chatbot/${id}`}
        className="mt-6 inline-flex items-center gap-2 text-[#4F8A8B] transition hover:gap-3"
      >
        Open Chatbot
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}