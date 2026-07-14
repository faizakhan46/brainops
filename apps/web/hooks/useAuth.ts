"use client";

import { useState } from "react";
import * as authService from "@/services/auth.service";

export function useAuth() {
  const [loading, setLoading] = useState(false);

  async function signUp(
    name: string,
    email: string,
    password: string
  ) {
    setLoading(true);

    const result = await authService.signup(
      name,
      email,
      password
    );

    setLoading(false);

    return result;
  }

  return {
    signUp,
    loading,
  };
}