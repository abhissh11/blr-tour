"use client";

import { attractions } from "@/lib/data/attractions";
import Image from "next/image";
import { motion } from "framer-motion";
import { use } from "react";

// Icons
import { Clock, Ticket, MapPin, Train, Bus, Car } from "lucide-react";

export default function PlacePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const attraction = attractions.find((a) => a.slug === slug);

  if (!attraction) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold">Attraction not found</h1>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src={attraction.heroImage}
          alt={attraction.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl"
          >
            {attraction.name}
          </motion.h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto mt-16 px-6">
        {/* OVERVIEW */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {attraction.description}
          </p>
        </motion.section>

        {/* QUICK INFO */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-8 rounded-2xl mt-10 shadow-md"
        >
          <div className="flex items-start gap-3">
            <Clock className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">Timings</h4>
              <p className="text-gray-600">{attraction.timings}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Ticket className="text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">Entry Fee</h4>
              <p className="text-gray-600">{attraction.entryFee}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-red-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">Location</h4>
              <p className="text-gray-600">{attraction.location}</p>
            </div>
          </div>
        </motion.section>

        {/* GALLERY */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {attraction.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img}
                  alt={`${attraction.name} - image ${index}`}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* HOW TO REACH */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">How to Reach</h2>

          <ul className="space-y-3 text-lg text-gray-700">
            {attraction.howToReach.map((line, idx) => {
              const icon = line.toLowerCase().includes("metro") ? (
                <Train className="text-purple-600" />
              ) : line.toLowerCase().includes("bus") ? (
                <Bus className="text-yellow-600" />
              ) : (
                <Car className="text-blue-600" />
              );

              return (
                <li key={idx} className="flex items-center gap-3">
                  {icon}
                  <span>{line}</span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* MAP */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Map</h2>
          <div className="w-full overflow-hidden rounded-xl shadow-lg">
            <iframe
              src={attraction.mapEmbed}
              width="100%"
              height="400"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
