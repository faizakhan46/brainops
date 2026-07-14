"use client";

import { Bot } from "lucide-react";

interface EmptyStateProps {
  onCreate: () => void;
}

export default function EmptyState({
  onCreate,
}: EmptyStateProps) {
  return (
    <div className="mt-12 rounded-2xl border border-dashed border-white/10 bg-[#111315] p-12 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4F8A8B]/10">
        <Bot className="text-[#4F8A8B]" size={32} />
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-white">
        No chatbots yet
      </h2>

      <p className="mt-2 text-slate-400">
        Create your first AI chatbot to start chatting with your documents.
      </p>

      <button
        onClick={onCreate}
        className="mt-8 rounded-xl bg-[#4F8A8B] px-6 py-3 font-medium text-white transition hover:opacity-90"
      >
        Create Chatbot
      </button>
    </div>
  );
}