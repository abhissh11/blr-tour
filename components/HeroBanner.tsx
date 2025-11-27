"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/hero/bangalore-palace.jpeg",
  "/images/hero/vidhana.jpg",
  "/images/hero/lalbagh.jpg",
  "/images/hero/blr2.jpg",
  "/images/hero/cubbon-park.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt="Bengaluru"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold drop-shadow-lg"
        >
          Welcome to Bengaluru
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg md:text-xl text-white/90 drop-shadow"
        >
          The Garden City of India
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="/attractions"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition"
          >
            Explore Attractions
          </a>

          <a
            href="/plan-your-trip"
            className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg text-white font-semibold border border-white/40 shadow-lg transition"
          >
            Plan Your Trip
          </a>
        </motion.div>
      </div>
    </section>
  );
}
