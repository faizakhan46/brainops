import MetricCard from "@/components/dashboard/MetricCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import QuickActions from "@/components/dashboard/QuickActions";

import {
  Activity,
  Bot,
  IndianRupee,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-slate-400">
          Here's what's happening in your BrainOps workspace.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="AI Chats"
          value="1,284"
          change="+12%"
          icon={<Bot size={22} />}
        />

        <MetricCard
          title="Leads"
          value="217"
          change="+8%"
          icon={<Users size={22} />}
        />

        <MetricCard
          title="Revenue"
          value="₹52,400"
          change="+18%"
          icon={<IndianRupee size={22} />}
        />

        <MetricCard
          title="Accuracy"
          value="98.9%"
          change="+1.5%"
          icon={<Activity size={22} />}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AnalyticsChart />
        </div>

        <ActivityFeed />
      </div>

      <QuickActions />
    </div>
  );
}