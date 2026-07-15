"use client";

import { useEffect, useState } from "react";
import { Upload, MessageSquare } from "lucide-react";

import UploadZone from "./UploadZone";
import DocumentCard from "./DocumentCard";

import {
  uploadDocument,
  getDocuments,
  deleteDocument,
} from "@/services/document.service";

interface Props {
  chatbotId: string;
}

interface Document {
  id: string;
  file_name: string;
  storage_path: string;
}

export default function WorkspaceClient({
  chatbotId,
}: Props) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [uploading, setUploading] = useState(false);

  async function loadDocuments() {
    try {
      const docs = await getDocuments(chatbotId);
      setDocuments(docs || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadDocuments();
  }, [chatbotId]);

  async function handleUpload(file: File) {
    try {
      setUploading(true);

      await uploadDocument(chatbotId, file);

      await loadDocuments();

      alert("Document uploaded successfully.");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(
    id: string,
    storagePath: string
  ) {
    try {
      await deleteDocument(id, storagePath);

      await loadDocuments();
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Chatbot Workspace
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your documents and chat with your AI assistant.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Documents */}

        <div className="rounded-2xl border border-white/10 bg-[#111315] p-6">

          <div className="mb-6 flex items-center gap-3">
            <Upload className="text-[#4F8A8B]" />

            <h2 className="text-xl font-semibold text-white">
              Documents
            </h2>
          </div>

          {uploading ? (
            <div className="mb-6 flex h-24 items-center justify-center text-white">
              Uploading...
            </div>
          ) : (
            <div className="mb-6">
              <UploadZone onSelect={handleUpload} />
            </div>
          )}

          <div className="space-y-3">
            {documents.length === 0 ? (
              <p className="text-sm text-slate-500">
                No documents uploaded.
              </p>
            ) : (
              documents.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  fileName={doc.file_name}
                  onDelete={() =>
                    handleDelete(
                      doc.id,
                      doc.storage_path
                    )
                  }
                />
              ))
            )}
          </div>
        </div>

        {/* AI Chat */}

        <div className="rounded-2xl border border-white/10 bg-[#111315] p-6">

          <div className="mb-6 flex items-center gap-3">
            <MessageSquare className="text-[#4F8A8B]" />

            <h2 className="text-xl font-semibold text-white">
              AI Chat
            </h2>
          </div>

          <div className="flex h-[420px] items-center justify-center rounded-xl border border-white/10">
            <p className="text-slate-500">
              Upload a PDF to start chatting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}