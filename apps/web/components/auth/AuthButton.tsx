interface AuthButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function AuthButton({
  children,
  loading,
  disabled,
  type = "submit",
}: AuthButtonProps) {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className="mt-6 w-full rounded-xl bg-[#4F8A8B] px-5 py-3 font-medium text-white transition hover:bg-[#5A9C9D] disabled:opacity-50"
    >
      {loading ? "Creating account..." : children}
    </button>
  );
}