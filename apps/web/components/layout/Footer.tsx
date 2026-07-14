import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2E4540]/30 bg-[#0B0909]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">

        <div>
          <h2 className="text-2xl font-bold text-white">
            BrainOps
          </h2>

          <p className="mt-4 text-[#8B949E]">
            AI Operating System for modern businesses.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">
            Product
          </h3>

          <ul className="space-y-3 text-[#C8CDD0]">
            <li><Link href="#">AI Chatbots</Link></li>
            <li><Link href="#">Voice Agents</Link></li>
            <li><Link href="#">Automation</Link></li>
            <li><Link href="#">CRM</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">
            Resources
          </h3>

          <ul className="space-y-3 text-[#C8CDD0]">
            <li><Link href="#">Documentation</Link></li>
            <li><Link href="#">API</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Help Center</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">
            Company
          </h3>

          <ul className="space-y-3 text-[#C8CDD0]">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-[#2E4540]/30 py-6 text-center text-sm text-[#8B949E]">
        © 2026 BrainOps. All rights reserved.
      </div>
    </footer>
  );
}