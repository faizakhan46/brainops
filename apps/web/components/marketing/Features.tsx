"use client";

import { motion } from "framer-motion";
import {
  Bot,
  PhoneCall,
  Workflow,
  MessageCircle,
  FileText,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/Button";

const features = [
  {
    title: "AI Customer Support",
    description:
      "Deploy AI chatbots trained on your business knowledge to answer customer queries 24/7.",
    icon: Bot,
  },
  {
    title: "AI Voice Agents",
    description:
      "Handle inbound and outbound customer calls with intelligent voice assistants.",
    icon: PhoneCall,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks across your business using AI-powered workflows.",
    icon: Workflow,
  },
  {
    title: "WhatsApp Automation",
    description:
      "Reply instantly to customers, qualify leads, and automate conversations.",
    icon: MessageCircle,
  },
  {
    title: "Document Intelligence",
    description:
      "Upload PDFs and documents to let AI answer questions with accurate context.",
    icon: FileText,
  },
  {
    title: "CRM & Analytics",
    description:
      "Track leads, customers, conversations, and business performance from one dashboard.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section className="bg-[#0B0909] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8B949E]">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Everything You Need to Run Your Business with AI
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-[#C8CDD0]">
            BrainOps combines customer support, AI agents, automation,
            CRM, analytics, and business tools into one intelligent platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-[#2E4540]/40 bg-[#151515] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#408175]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#408175]/15">
                  <Icon size={28} className="text-[#408175]" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-[#C8CDD0]">
                  {feature.description}
                </p>

                <Button
                  variant="ghost"
                  className="mt-6 p-0 text-[#B5B9F0] hover:bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}