import { supabase } from "@/lib/supabase";

export async function signup(
  name: string,
  email: string,
  password: string
) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
      emailRedirectTo: `${window.location.origin}/login`,
    },
  });
}

export async function login(
  email: string,
  password: string
) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function logout() {
  return await supabase.auth.signOut();
}