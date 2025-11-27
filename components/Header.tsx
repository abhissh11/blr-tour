"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Attractions", href: "/attractions" },
    { name: "Plan Your Trip", href: "/plan-your-trip" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-violet-700">
          Bengaluru Tourism
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-violet-700 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-violet-700 hover:opacity-80 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg px-6 pt-2 pb-6"
          >
            <div className="flex flex-col gap-4 text-lg font-medium">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)} // close menu on click
                  className="py-2 border-b border-gray-200 last:border-none hover:text-violet-700 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
