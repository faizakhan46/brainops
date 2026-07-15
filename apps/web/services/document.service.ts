import { supabase } from "@/lib/supabase";

export async function uploadDocument(
  chatbotId: string,
  file: File
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Not authenticated");

  const filePath = `${user.id}/${chatbotId}/${Date.now()}-${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from("documents")
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { error: dbError } = await supabase
    .from("documents")
    .insert({
      chatbot_id: chatbotId,
      user_id: user.id,
      file_name: file.name,
      storage_path: filePath,
    });

  if (dbError) throw dbError;
}

export async function getDocuments(chatbotId: string) {
  const { data, error } = await supabase
    .from("documents")
    .select("*")
    .eq("chatbot_id", chatbotId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function deleteDocument(
  id: string,
  storagePath: string
) {
  await supabase.storage
    .from("documents")
    .remove([storagePath]);

  return await supabase
    .from("documents")
    .delete()
    .eq("id", id);
}