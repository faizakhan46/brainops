"use client";

import { motion } from "framer-motion";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090B]">
      {/* Background Glow */}
      <div className="absolute left-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[140px]" />
      <div className="absolute right-[-150px] bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px]" />

      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-20 lg:grid-cols-2">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroBadge />

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Run Your Entire
            <br />
            Business{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              With AI
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
            BrainOps helps businesses automate customer support,
            manage leads, create AI agents, generate documents,
            and streamline operations—all from one intelligent
            workspace.
          </p>

          <HeroButtons />

          <div className="mt-12 flex flex-wrap gap-10 text-slate-400">
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="mt-1">AI Customer Support</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">99.9%</p>
              <p className="mt-1">Platform Uptime</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="mt-1">AI Automations</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <DashboardPreview />
        </motion.div>

      </div>
    </section>
  );
}