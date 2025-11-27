"use client";

import Carousel from "@/components/ui/carousel";
import {
  Landmark,
  Trees,
  PawPrint,
  Beer,
  UtensilsCrossed,
  Cpu,
} from "lucide-react";

export default function BengaluruExperiences() {
  const slides = [
    {
      title: "Culture & Heritage",
      slug: "culture-heritage",
      icon: Landmark,
      description: "Explore historic palaces and iconic monuments.",
      button: "Explore →",
      src: "/images/experiences/culture.png",
    },
    {
      title: "Nature & Parks",
      slug: "nature-parks",
      icon: Trees,
      description: "Green escapes and scenic views of Bengaluru.",
      button: "Explore →",
      src: "/images/experiences/nature.jpg",
    },
    {
      title: "Wildlife & Adventure",
      slug: "wildlife-adventure",
      icon: PawPrint,
      description: "Safaris, treks and adventures around the city.",
      button: "Explore →",
      src: "/images/experiences/adventure.jpg",
    },
    {
      title: "Nightlife & Hangouts",
      slug: "nightlife-hangouts",
      icon: Beer,
      description: "MG Road, Indiranagar and Bengaluru nightlife.",
      button: "Explore →",
      src: "/images/experiences/nightlife.jpg",
    },
    {
      title: "Food & Cuisine",
      slug: "food-cuisine",
      icon: UtensilsCrossed,
      description: "Taste the best dishes in the Garden City.",
      button: "Explore →",
      src: "/images/experiences/food.jpeg",
    },
    {
      title: "Tech & Innovation",
      slug: "tech-innovation",
      icon: Cpu,
      description: "Silicon Valley of India — tech hubs & more.",
      button: "Explore →",
      src: "/images/experiences/tech.jpg",
    },
  ];

  return (
    <section
      className="py-24 bg-linear-to-r from-amber-100 to-violet-200 overflow-hidden"
      id="experiences"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold">Bengaluru Experiences</h2>
        <p className="mt-3 text-gray-600 text-lg">
          Explore the best ways to experience the city.
        </p>
      </div>

      {/* FIX: allow arrows to be visible */}
      <div className="relative overflow-visible w-full h-full py-10">
        <Carousel
          slides={slides.map((s) => ({
            title: s.title,
            src: s.src,
            description: s.description, // STRING ONLY
            button: s.button, // STRING ONLY
            onClick: () => {
              window.location.href = `/experiences/${s.slug}`;
            },
          }))}
        />
      </div>
    </section>
  );
}
