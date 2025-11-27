"use client";

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-100 to-violet-200 mt-20 pt-16 pb-10 border-t border-white/40 backdrop-blur-xl">
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Bengaluru Tourism
          </h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            Discover the beauty, culture, food, and experiences of Namma
            Bengaluru — the Garden City, Tech Capital, and the heart of
            Karnataka.
          </p>

          <div className="flex gap-4 mt-5">
            <Instagram className="w-6 h-6 text-violet-800 hover:text-violet-900 cursor-pointer" />
            <Facebook className="w-6 h-6 text-violet-800 hover:text-violet-900 cursor-pointer" />
            <Youtube className="w-6 h-6 text-violet-800 hover:text-violet-900 cursor-pointer" />
          </div>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Explore</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <Link href="/attractions" className="hover:text-violet-800">
                Top Attractions
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-violet-800">
                Experiences
              </Link>
            </li>
            <li>
              <Link href="/plan-your-trip" className="hover:text-violet-800">
                Plan Your Trip
              </Link>
            </li>
            <li>
              <Link href="/attractions" className="hover:text-violet-800">
                Cafés & Hangouts
              </Link>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <Link href="/contact" className="hover:text-violet-800">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-violet-800">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-violet-800">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-violet-800">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Get in Touch</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-2">
              <MapPin className="text-violet-800" size={20} />
              Bengaluru, Karnataka
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-violet-800" size={20} />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-violet-800" size={20} />
              support@bengalurutourism.com
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 text-center border-t border-white/40 pt-6">
        <p className="text-gray-800 font-semibold text-lg">
          ❤️ Namma Bengaluru Welcomes You
        </p>
        <p className="text-gray-600 mt-1 text-sm">
          © {new Date().getFullYear()} Bengaluru Tourism Project — All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
