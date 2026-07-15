"use client";

import type { ChangeEvent } from "react";

interface UploadZoneProps {
  onSelect: (file: File) => void;
}

export default function UploadZone({
  onSelect,
}: UploadZoneProps) {
  function handleChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    if (!e.target.files?.length) return;

    onSelect(e.target.files[0]);
  }

  return (
    <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/10 transition hover:border-[#4F8A8B]">
      <input
        type="file"
        accept=".pdf"
        hidden
        onChange={handleChange}
      />

      <p className="text-lg font-medium text-white">
        Upload PDF
      </p>

      <p className="mt-2 text-sm text-slate-500">
        Click to choose a PDF
      </p>
    </label>
  );
}