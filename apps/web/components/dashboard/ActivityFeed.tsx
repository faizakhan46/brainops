import {
  Bot,
  FileText,
  UserPlus,
  CheckCircle2,
} from "lucide-react";

const activities = [
  {
    title: "New chatbot created",
    time: "2 minutes ago",
    icon: Bot,
  },
  {
    title: "Knowledge base updated",
    time: "15 minutes ago",
    icon: FileText,
  },
  {
    title: "New customer registered",
    time: "1 hour ago",
    icon: UserPlus,
  },
  {
    title: "Workflow completed",
    time: "2 hours ago",
    icon: CheckCircle2,
  },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="rounded-xl bg-[#4F8A8B]/10 p-3 text-[#4F8A8B]">
                <Icon size={18} />
              </div>

              <div>
                <p className="text-white">
                  {activity.title}
                </p>

                <p className="text-sm text-slate-400">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}