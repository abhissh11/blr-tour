"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Train,
  Plane,
  Map,
  Utensils,
  CloudSun,
  Bus,
} from "lucide-react";

const tripOptions = [
  {
    title: "Where to Stay",
    description:
      "Find hotels, resorts, budget stays and homestays across Bengaluru.",
    icon: BedDouble,
    link: "/plan-your-trip",
  },
  {
    title: "Transportation",
    description:
      "Learn how to travel across the city via metro, BMTC buses, and taxis.",
    icon: Train,
    link: "/plan-your-trip",
  },
  {
    title: "How to Reach Bengaluru",
    description:
      "By air, train, or bus – explore all routes and travel options.",
    icon: Plane,
    link: "/plan-your-trip",
  },
  {
    title: "City Map & Routes",
    description:
      "Navigate the city with offline maps, metro routes, and local guides.",
    icon: Map,
    link: "/plan-your-trip",
  },
  {
    title: "Food & Dining",
    description:
      "Explore local cuisine, must-try dishes, restaurants, and cafés.",
    icon: Utensils,
    link: "/plan-your-trip",
  },
  {
    title: "Weather & Best Time",
    description: "Know Bengaluru's seasons to plan the most comfortable trip.",
    icon: CloudSun,
    link: "/plan-your-trip",
  },
];

export default function PlanYourTrip() {
  return (
    <section
      className="py-24 bg-linear-to-tr from-amber-100 to-violet-200"
      id="plan-your-trip"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Plan Your Trip</h2>
          <p className="text-gray-600 mt-3 text-lg">
            Everything you need to plan the perfect Bengaluru experience.
          </p>
        </motion.div>

        {/* Trip Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tripOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col items-start gap-4 hover:shadow-xl transition cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-blue-100 text-blue-700">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>

                <span className="text-blue-600 font-medium text-sm mt-auto">
                  Learn more →
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
