"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function PasswordInput({
  label,
  error,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <div className="relative">
        <input
            {...props}
            type={showPassword ? "text" : "password"}
            className={`
            w-full rounded-xl
             border
            bg-[#151515]
            px-4
            py-3
            pr-12
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

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}