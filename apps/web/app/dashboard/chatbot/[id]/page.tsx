import WorkspaceClient from "@/components/chatbot/WorkspaceClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ChatbotWorkspace({
  params,
}: PageProps) {
  const { id } = await params;

  return <WorkspaceClient chatbotId={id} />;
}