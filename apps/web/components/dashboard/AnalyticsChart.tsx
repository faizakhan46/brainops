"use client";

import { motion } from "framer-motion";

const bars = [45, 70, 55, 85, 65, 95, 80];

export default function AnalyticsChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          AI Usage
        </h2>

        <span className="text-sm text-green-400">
          +18% this week
        </span>
      </div>

      <div className="flex h-64 items-end gap-4">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-[#4F8A8B] to-[#6AA6A5]"
          />
        ))}
      </div>
    </div>
  );
}