"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    description: "Perfect for freelancers and startups.",
    features: [
      "1 AI Chatbot",
      "500 AI Conversations",
      "Knowledge Base",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹2,999",
    description: "Best for growing businesses.",
    features: [
      "Unlimited Chatbots",
      "AI Voice Agent",
      "CRM Integration",
      "WhatsApp Automation",
      "Workflow Builder",
      "Analytics Dashboard",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large organizations.",
    features: [
      "Unlimited Everything",
      "Dedicated AI Models",
      "API Access",
      "Custom Integrations",
      "Dedicated Support",
      "Account Manager",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#0B0909] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8B949E]">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Simple Pricing for Every Business
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#C8CDD0]">
            Start small and upgrade as your business grows.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className={`relative rounded-3xl border bg-[#151515] p-8 ${
                plan.popular
                  ? "border-[#408175] scale-105"
                  : "border-[#2E4540]/40"
              }`}
            >

              {plan.popular && (
                <Badge className="absolute right-6 top-6">
                  Most Popular
                </Badge>
              )}

              <h3 className="text-2xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-2 text-[#8B949E]">
                {plan.description}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold text-white">
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (
                  <span className="text-[#8B949E]">
                    /month
                  </span>
                )}
              </div>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[#C8CDD0]"
                  >
                    <Check
                      size={18}
                      className="text-[#408175]"
                    />

                    {feature}
                  </li>
                ))}

              </ul>

              <Button
                className="mt-10 w-full"
                variant={plan.popular ? "primary" : "secondary"}
              >
                {plan.price === "Custom"
                  ? "Contact Sales"
                  : "Start Free"}
              </Button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}