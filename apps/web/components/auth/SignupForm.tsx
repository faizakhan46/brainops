"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

import { signupSchema, SignupSchema } from "@/lib/validations/auth";
import { useAuth } from "@/hooks/useAuth";

export default function SignupForm() {
  const router = useRouter();
  const { signUp, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit(data: SignupSchema) {
    const { error } = await signUp(
      data.name,
      data.email,
      data.password
    );

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success(
      "Account created successfully. Please verify your email."
    );

    router.push("/login");
  }

  return (
    <AuthCard>
      <AuthHeader
        title="Create your account"
        subtitle="Start using BrainOps today."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8"
      >
        <AuthInput
          label="Full Name"
          placeholder="Faiza Khan"
          error={errors.name?.message}
          {...register("name")}
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="faiza@example.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Minimum 8 characters"
          error={errors.password?.message}
          {...register("password")}
        />

        <AuthButton
          type="submit"
          loading={loading}
        >
          Create Account
        </AuthButton>
      </form>
    </AuthCard>
  );
}