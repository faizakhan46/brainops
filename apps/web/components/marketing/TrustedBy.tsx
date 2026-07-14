import {
  Bot,
  MessageCircle,
  CreditCard,
  ShoppingBag,
  Globe,
  Mail,
  Database,
  Workflow,
} from "lucide-react";

const integrations = [
  {
    name: "OpenAI",
    icon: Bot,
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
  },
  {
    name: "Stripe",
    icon: CreditCard,
  },
  {
    name: "Shopify",
    icon: ShoppingBag,
  },
  {
    name: "WordPress",
    icon: Globe,
  },
  {
    name: "Gmail",
    icon: Mail,
  },
  {
    name: "HubSpot",
    icon: Database,
  },
  {
    name: "n8n",
    icon: Workflow,
  },
];

export default function TrustedBy() {
  return (
    <section className="bg-[#0B0909] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-[#8B949E]">
            Integrates With
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Works with the tools your business already uses
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#C8CDD0]">
            Connect BrainOps with your existing workflow and automate customer support,
            communication, payments, CRM, and more.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          {integrations.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group rounded-2xl border border-[#2E4540]/30 bg-[#151515] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#408175]"
              >
                <Icon
                  className="mx-auto text-[#408175] transition group-hover:scale-110"
                  size={34}
                />

                <p className="mt-4 text-center font-medium text-white">
                  {item.name}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}