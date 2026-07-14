import { Upload, MessageSquare } from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ChatbotWorkspace({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Chatbot Workspace
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your documents and chat with your AI assistant.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Upload Section */}
        <div className="rounded-2xl border border-white/10 bg-[#111315] p-6">
          <div className="mb-6 flex items-center gap-3">
            <Upload className="text-[#4F8A8B]" />
            <h2 className="text-xl font-semibold text-white">
              Documents
            </h2>
          </div>

          <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-white/10">
            <div className="text-center">
              <Upload
                size={40}
                className="mx-auto text-slate-500"
              />

              <p className="mt-4 text-white">
                Upload PDF Files
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Drag & Drop or Click to Upload
              </p>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="rounded-2xl border border-white/10 bg-[#111315] p-6">
          <div className="mb-6 flex items-center gap-3">
            <MessageSquare className="text-[#4F8A8B]" />

            <h2 className="text-xl font-semibold text-white">
              AI Chat
            </h2>
          </div>

          <div className="flex h-64 items-center justify-center rounded-xl border border-white/10">
            <p className="text-slate-500">
              Upload a PDF to start chatting.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#111315] p-5">
        <p className="text-sm text-slate-500">
          Chatbot ID
        </p>

        <p className="mt-2 break-all font-mono text-[#4F8A8B]">
          {id}
        </p>
      </div>
    </div>
  );
}