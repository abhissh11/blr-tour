"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function BestOfBangalore() {
  return (
    <div className="bg-white py-32">
      <h2 className="text-4xl font-bold text-center mb-10">
        Best of Bengaluru
      </h2>
      <p className="text-gray-600 text-center mb-16 text-lg">
        Cafés • Museums • Food Streets • Parks • Art • Nightlife
      </p>

      <HorizontalScrollShowcase />
    </div>
  );
}

const HorizontalScrollShowcase = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves cards from right → left during vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-10">
          {highlightCards.map((card) => (
            <HighlightCard card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HighlightCard = ({ card }: { card: HighlightCardType }) => {
  return (
    <div className="group relative h-[450px] w-[350px] md:w-[450px] overflow-hidden rounded-3xl shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center bg-linear-to-r from-amber-100 to-violet-200 transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${card.image})` }}
      ></div>

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>

      <div className="absolute inset-0 z-10 grid place-content-center px-6 text-center">
        <p className="text-white text-xl md:text-5xl font-black uppercase drop-shadow-lg backdrop-blur-sm p-4 bg-white/10 rounded-xl">
          {card.title}
        </p>
      </div>
    </div>
  );
};

type HighlightCardType = {
  id: number;
  title: string;
  image: string;
};

const highlightCards: HighlightCardType[] = [
  {
    id: 1,
    title: "Third Wave Coffee",
    image: "/images/highlights/third-wave.jpg",
  },
  {
    id: 2,
    title: "Church Street",
    image: "/images/highlights/church-street.jpeg",
  },
  {
    id: 3,
    title: "Visvesvaraya Museum",
    image: "/images/highlights/visv.jpeg",
  },
  {
    id: 4,
    title: "UB City",
    image: "/images/highlights/ub-city.jpg",
  },
  {
    id: 5,
    title: "Cubbon Park",
    image: "/images/highlights/cubbon-park.jpg",
  },
  {
    id: 6,
    title: "Rameshwaram Café",
    image: "/images/highlights/rameshwaram.jpeg",
  },
  {
    id: 7,
    title: "Bangalore Palace",
    image: "/images/hero/bangalore-palace.jpeg",
  },

  {
    id: 9,
    title: "Nandi Hills",
    image: "/images/highlights/nandi-hills.jpg",
  },
];
