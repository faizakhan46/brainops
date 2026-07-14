"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can I train the chatbot using my own documents?",
    answer:
      "Yes. Upload PDFs, Word files, FAQs, or website content to create a chatbot trained specifically on your business knowledge.",
  },
  {
    question: "Does BrainOps support WhatsApp?",
    answer:
      "Yes. Connect WhatsApp Business to automate customer replies, lead qualification, and notifications.",
  },
  {
    question: "Can I connect my CRM?",
    answer:
      "Absolutely. BrainOps is designed to integrate with popular CRM systems so customer information stays synchronized.",
  },
  {
    question: "Which AI models are supported?",
    answer:
      "BrainOps is built to support OpenAI, Gemini, Claude, and additional AI providers as the platform evolves.",
  },
  {
    question: "Do I need coding knowledge?",
    answer:
      "No. The platform is designed for business users with an intuitive interface while still providing advanced options for developers.",
  },
  {
    question: "Can I create multiple AI agents?",
    answer:
      "Yes. Depending on your plan, you can create multiple chatbots, voice agents, and workflow automations.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0B0909] py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8B949E]">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-[#C8CDD0]">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#2E4540]/40 bg-[#151515]"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-white">
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: open === index ? 180 : 0 }}
                >
                  <ChevronDown className="text-[#408175]" />
                </motion.div>
              </button>

              <AnimatePresence>

                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 leading-7 text-[#C8CDD0]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}