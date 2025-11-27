"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const attractions = [
  {
    id: 1,
    title: "Lalbagh Botanical Garden",
    slug: "lalbagh",
    thumbnail: "/images/attractions/lalbagh.jpg",
    description: "A historic garden with a glass house & rare flora.",
  },
  {
    id: 2,
    title: "Cubbon Park",
    slug: "cubbon-park",
    thumbnail: "/images/attractions/cubbon-park.jpg",
    description: "Lush green heart of Bengaluru.",
  },
  {
    id: 3,
    title: "Bangalore Palace",
    slug: "bangalore-palace",
    thumbnail: "/images/attractions/palace.jpeg",
    description: "Majestic Tudor-style royal architecture.",
  },
  {
    id: 4,
    title: "Nandi Hills",
    slug: "nandi-hills",
    thumbnail: "/images/attractions/nandi-hills.jpg",
    description: "A breathtaking sunrise viewpoint.",
  },
  {
    id: 5,
    title: "Bannerghatta Biological Park",
    slug: "bannerghatta",
    thumbnail: "/images/attractions/bannerghata.jpeg",
    description: "Wildlife safari, zoo & butterfly park.",
  },
  {
    id: 6,
    title: "Vidhana Soudha",
    slug: "vidhana-soudha",
    thumbnail: "/images/attractions/vidhana.jpg",
    description: "Iconic Dravidian-style legislative building.",
  },
];

export default function TopAttractions() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Top Attractions of Bengaluru
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {attractions.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full aspect-video">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-60 group-hover:opacity-70 transition" />

              {/* Text content */}
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-white text-xl font-bold drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mt-1 drop-shadow-md max-w-xs">
                  {item.description}
                </p>
              </div>

              {/* Hover Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <a
                  href={`/places/${item.slug}`}
                  className="opacity-0 group-hover:opacity-100 bg-white/20 border border-white/40 backdrop-blur-md text-white px-6 py-2 rounded-lg font-semibold transition shadow-lg hover:bg-white/30"
                >
                  Explore →
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
