"use client";

import { useState } from "react";

interface CreateChatbotModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (name: string, description: string) => Promise<void>;
}

export default function CreateChatbotModal({
  open,
  onClose,
  onCreate,
}: CreateChatbotModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit() {
    if (!name.trim()) return;

    setLoading(true);

    await onCreate(name, description);

    setLoading(false);

    setName("");
    setDescription("");

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-lg rounded-2xl bg-[#111315] p-8 text-white">
        <h2 className="text-2xl font-semibold">
          Create AI Chatbot
        </h2>

        <p className="mt-2 text-slate-400">
          Give your chatbot a name and description.
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Chatbot Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Customer Support Bot"
              className="w-full rounded-xl border border-white/10 bg-[#1A1C20] px-4 py-3 outline-none focus:border-[#4F8A8B]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Answers customer questions using uploaded documents..."
              className="w-full rounded-xl border border-white/10 bg-[#1A1C20] px-4 py-3 outline-none focus:border-[#4F8A8B]"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 px-5 py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-xl bg-[#4F8A8B] px-5 py-3 text-white disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Chatbot"}
          </button>
        </div>
      </div>
    </div>
  );
}