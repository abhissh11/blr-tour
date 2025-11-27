"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import BestOfBangalore from "../../components/sections/BestOfBangalore";

const moreAttractions = [
  {
    title: "Wonderla Amusement Park",
    image: "/images/attractions/wonderla.jpg",
    description:
      "A thrilling world of rides, water slides, and adventure for families and friends.",
    location: "Mysore Road, Bengaluru",
  },
  {
    title: "Iskcon Temple",
    image: "/images/attractions/iskcon-whitefield.jpg",
    description:
      "A spiritual and architectural marvel offering peace, devotion, and cultural experiences.",
    location: "Rajajinagar, Bengaluru",
  },
  {
    title: "Ulsoor Lake",
    image: "/images/attractions/ulsoor-lake.jpeg",
    description:
      "One of the oldest lakes of Bengaluru known for boating and evening serenity.",
    location: "Ulsoor, Bengaluru",
  },
  {
    title: "Jawaharlal Nehru Planetarium",
    image: "/images/attractions/planet.jpeg",
    description:
      "Discover space, astronomy shows, and immersive sky-theatre experiences.",
    location: "High Grounds, Bengaluru",
  },
  {
    title: "Commercial Street",
    image: "/images/attractions/commercial-street.jpg",
    description:
      "A shopping paradise for clothing, jewelry, footwear, food, and everything trendy.",
    location: "Shivaji Nagar, Bengaluru",
  },
  {
    title: "HAL Aerospace Museum",
    image: "/images/attractions/HAL.jpg",
    description:
      "India’s first aerospace museum showcasing historic aircraft, engines, and space-tech.",
    location: "Marathahalli, Bengaluru",
  },
];

export default function AllAttractionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-violet-200">
      {/* HERO SECTION */}
      <section className="py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-gray-900 drop-shadow-sm"
        >
          Explore More Attractions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto"
        >
          Dive deeper into the heart of Namma Bengaluru. Discover parks,
          temples, museums, lakes, hangout spots, and much more.
        </motion.p>
      </section>

      {/* ATTRACTIONS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {moreAttractions.map((place, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl transition cursor-pointer group"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">{place.title}</h3>

              <p className="mt-3 text-gray-700">{place.description}</p>

              <div className="flex items-center gap-2 text-gray-600 mt-4">
                <MapPin size={18} className="text-violet-700" />
                <span>{place.location}</span>
              </div>

              {/* CONTACT BUTTON */}
              <motion.a
                href="/contact"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-violet-700 text-white font-semibold shadow-md hover:bg-violet-800 transition"
              >
                Contact Us
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </section>
      <BestOfBangalore />
    </div>
  );
}
