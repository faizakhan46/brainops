"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Activity,
  Users,
  IndianRupee,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/Card";

import { Badge } from "@/components/ui/Badge";

export default function DashboardPreview() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="relative overflow-hidden backdrop-blur-xl">

        <CardHeader>
          <div>
            <CardTitle>BrainOps Dashboard</CardTitle>

            <p className="text-sm text-slate-400">
              Live AI Workspace
            </p>
          </div>

          <Badge variant="success" className="gap-2">
            <CheckCircle2 size={16} />
            Online
          </Badge>
        </CardHeader>

        <CardContent>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-4">

            <MetricCard
              icon={<Bot size={18} />}
              title="AI Chats"
              value="124"
              color="text-indigo-400"
            />

            <MetricCard
              icon={<Users size={18} />}
              title="New Leads"
              value="17"
              color="text-cyan-400"
            />

            <MetricCard
              icon={<Activity size={18} />}
              title="Accuracy"
              value="98.7%"
              color="text-green-400"
            />

            <MetricCard
              icon={<IndianRupee size={18} />}
              title="Revenue"
              value="₹48K"
              color="text-yellow-400"
            />

          </div>

          {/* Chart */}

          <div className="mt-8 rounded-2xl bg-black/20 p-5">

            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-400">
                AI Activity
              </span>

              <span className="flex items-center gap-1 text-green-400 text-sm">
                +18%
                <ArrowUpRight size={15} />
              </span>
            </div>

            <div className="flex h-28 items-end justify-between gap-2">

              {[35, 60, 45, 80, 70, 95, 88].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="w-full rounded-full bg-gradient-to-t from-[#408175] to-[#B5B9F0]"
                  style={{ height }}
                />
              ))}

            </div>

          </div>

        </CardContent>

        {/* Floating Notification */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute -right-5 top-20 rounded-2xl border border-[#408175]/20 bg-[#151515] p-4 shadow-xl"
        >
          <p className="text-xs text-slate-400">
            AI Assistant
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            New lead captured
          </p>
        </motion.div>

      </Card>
    </motion.div>
  );
}

function MetricCard({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-[#408175]/20 bg-black/20 p-4 transition-all hover:border-[#408175]/50">
      <div className={`mb-3 ${color}`}>
        {icon}
      </div>

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {value}
      </h3>
    </div>
  );
}