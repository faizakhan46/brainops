import { Plus, Upload, Bot } from "lucide-react";

const actions = [
  {
    title: "Create Chatbot",
    icon: Bot,
  },
  {
    title: "Upload Documents",
    icon: Upload,
  },
  {
    title: "New Workflow",
    icon: Plus,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex w-full items-center gap-4 rounded-xl bg-[#1A1A1A] p-4 transition hover:bg-[#232323]"
            >
              <div className="rounded-lg bg-[#4F8A8B]/10 p-3 text-[#4F8A8B]">
                <Icon size={20} />
              </div>

              <span className="font-medium text-white">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}