export default function Divider() {
  return (
    <div className="my-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-white/10" />

      <span className="text-xs uppercase tracking-widest text-slate-500">
        OR
      </span>

      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}