"use client";

import { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function AuthInput({
  label,
  error,
  ...props
}: AuthInputProps) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

    <input
        {...props}
        className={`
            w-full rounded-xl
            border
            bg-[#151515]
            px-4
            py-3
            text-white
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-500

        ${
      error
        ? "border-red-500 focus:border-red-500"
        : "border-white/10 focus:border-[#4F8A8B]"
        }

        ${props.className ?? ""}
     `}
    />

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}