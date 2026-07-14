"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthButton from "@/components/auth/AuthButton";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
  e.preventDefault();

  setLoading(true);
  setError("");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("Login Data:", data);
  console.log("Login Error:", error);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("Session:", session);

  setLoading(false);

  if (error) {
    setError(error.message);
    return;
  }

  router.push("/dashboard");
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090B] px-4">
      <AuthCard>
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to BrainOps."
        />

        <form onSubmit={handleLogin}>
          <AuthInput
            label="Email"
            type="email"
            placeholder="faiza@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="mb-4 text-sm text-red-400">
              {error}
            </p>
          )}

          <AuthButton loading={loading}>
            Login
          </AuthButton>
        </form>
      </AuthCard>
    </main>
  );
}