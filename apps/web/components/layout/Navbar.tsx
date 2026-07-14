"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
          Brain<span className="text-indigo-500">Ops</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-white md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}