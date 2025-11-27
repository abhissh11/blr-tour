"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card) => (
        <div key={card.id} className={cn(card.className)}>
          <motion.div
            onClick={() => handleClick(card)}
            layoutId={`card-${card.id}`}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer transition-all rounded-xl min-h-[300px] w-full",

              selected?.id === card.id &&
                "absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex items-end justify-center"
            )}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}

      {/* background overlay when selected */}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute inset-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => (
  <div className="absolute inset-0 h-full w-full">
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height={500}
      width={500}
      alt="thumbnail"
      className="object-cover absolute inset-0 h-full w-full"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>
  </div>
);

const SelectedCard = ({ selected }: { selected: Card | null }) => (
  <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      className="absolute inset-0 bg-black z-10"
    />

    <motion.div
      layoutId={`content-${selected?.id}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative px-8 pb-4 z-[70] text-white"
    >
      {selected?.content}
    </motion.div>
  </div>
);
