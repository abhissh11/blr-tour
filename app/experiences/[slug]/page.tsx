"use client";

import { experienceCategories } from "@/lib/data/experienceCategories";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExperienceCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = experienceCategories.find((c) => c.slug === params.slug);

  if (!category) {
    return (
      <div className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src={category.heroImage}
          alt={category.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white text-center drop-shadow-xl"
          >
            {category.title}
          </motion.h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto mt-16 px-6">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg text-gray-700">{category.description}</p>
        </motion.div>

        {/* Attractions */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold mb-6">Included Attractions</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {category.attractions.map((place, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <Link href={`/places/${place.slug}`}>
                  <Image
                    src={place.image}
                    alt={place.name}
                    width={400}
                    height={250}
                    className="object-cover h-48 w-full group-hover:scale-105 transition"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{place.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How to Reach */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">How to Reach</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            {category.howToReach.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
