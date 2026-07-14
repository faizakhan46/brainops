"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import EmptyState from "@/components/chatbot/EmptyState";
import CreateChatbotModal from "@/components/chatbot/CreateChatbotModal";
import ChatbotCard from "@/components/chatbot/ChatbotCard";

interface Chatbot {
  id: string;
  name: string;
  description: string;
}

export default function ChatbotPage() {
  const [open, setOpen] = useState(false);
  const [chatbots, setChatbots] = useState<Chatbot[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchChatbots() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data, error } = await supabase
      .from("chatbots")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setChatbots(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchChatbots();
  }, []);

  async function handleCreate(
    name: string,
    description: string
  ) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    const { error } = await supabase
      .from("chatbots")
      .insert({
        name,
        description,
        user_id: user.id,
      });

    if (error) {
      alert(error.message);
      return;
    }

    setOpen(false);
    fetchChatbots();
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            AI Chatbots
          </h1>

          <p className="mt-2 text-slate-400">
            Create and manage your AI assistants.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-xl bg-[#4F8A8B] px-5 py-3 font-medium text-white hover:opacity-90"
        >
          + New Chatbot
        </button>
      </div>

      {loading ? (
        <p className="text-slate-400">Loading...</p>
      ) : chatbots.length === 0 ? (
        <EmptyState onCreate={() => setOpen(true)} />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {chatbots.map((chatbot) => (
            <ChatbotCard
              key={chatbot.id}
              id={chatbot.id}
              name={chatbot.name}
              description={chatbot.description}
            />
          ))}
        </div>
      )}

      <CreateChatbotModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreate}
      />
    </div>
  );
}