import { ArrowUpRight } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

export default function MetricCard({
  title,
  value,
  change,
  icon,
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-lg transition-all duration-300 hover:border-[#4F8A8B] hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-[#4F8A8B]/10 p-3 text-[#6AA6A5]">
          {icon}
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-green-400">
          {change}
          <ArrowUpRight size={16} />
        </span>
      </div>

      <h3 className="mt-6 text-sm text-slate-400">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}