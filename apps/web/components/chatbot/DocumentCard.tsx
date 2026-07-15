"use client";

import { FileText, Trash2 } from "lucide-react";

interface Props {
  fileName: string;
  onDelete: () => void;
}

export default function DocumentCard({
  fileName,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#17191D] p-4">
      <div className="flex items-center gap-3">
        <FileText className="text-[#4F8A8B]" />

        <div>
          <p className="font-medium text-white">
            {fileName}
          </p>

          <p className="text-xs text-slate-500">
            Uploaded
          </p>
        </div>
      </div>

      <button
        onClick={onDelete}
        className="text-red-400 hover:text-red-300"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}