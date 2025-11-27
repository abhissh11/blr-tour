"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Train, Bus, Map, Shield } from "lucide-react";

export default function PlanYourTripPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-violet-200 pb-20">
      {/* HERO SECTION */}
      <section className="py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-gray-900 drop-shadow-sm"
        >
          Plan Your Trip
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto"
        >
          Your friendly guide to exploring Namma Bengaluru — from weather and
          timings to travel tips and perfect itineraries.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* BEST TIME TO VISIT */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border"
        >
          <div className="flex items-center gap-4 mb-6">
            <Calendar size={32} className="text-violet-700" />
            <h2 className="text-3xl font-bold">Best Time to Visit Bengaluru</h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Bengaluru enjoys pleasant weather year-round, but the
            <strong> best time to visit is October to February</strong>. Cool
            breeze, clear skies, and perfect temperatures make it the ideal
            season for sightseeing, café-hopping, nature trails, and cultural
            walks.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-violet-100 p-6 rounded-2xl">
              <h3 className="font-semibold text-lg mb-1">🌤 Winter (Oct–Feb)</h3>
              <p className="text-gray-600">
                Best season. Perfect for parks, gardens, sunrises & city walks.
              </p>
            </div>

            <div className="bg-amber-100 p-6 rounded-2xl">
              <h3 className="font-semibold text-lg mb-1">
                🌦 Monsoon (Jun–Sep)
              </h3>
              <p className="text-gray-600">
                Beautiful greenery, but expect sudden showers & traffic.
              </p>
            </div>

            <div className="bg-red-100 p-6 rounded-2xl">
              <h3 className="font-semibold text-lg mb-1">
                ☀️ Summer (Mar–May)
              </h3>
              <p className="text-gray-600">
                Warm afternoons, but breezy evenings. Great for nightlife.
              </p>
            </div>
          </div>
        </motion.section>

        {/* BEST TIME FOR ACTIVITIES */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold text-center">
            Best Time for Popular Activities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border">
              <h3 className="text-xl font-semibold mb-2">🌄 Nandi Hills</h3>
              <p className="text-gray-700">
                Best Time: <strong>5 AM – 8 AM</strong> (sunrise)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Fog, sunrise views, less crowd on weekdays.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border">
              <h3 className="text-xl font-semibold mb-2">
                🌳 Lalbagh Botanical Garden
              </h3>
              <p className="text-gray-700">
                Best Time: <strong>7 AM – 10 AM</strong> or{" "}
                <strong>4–6 PM</strong>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Ideal for photography and walks.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border">
              <h3 className="text-xl font-semibold mb-2">🏞 Cubbon Park</h3>
              <p className="text-gray-700">
                Best Time: <strong>Morning</strong>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Cycling + peaceful atmosphere.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border">
              <h3 className="text-xl font-semibold mb-2">
                🍲 VV Puram Food Street
              </h3>
              <p className="text-gray-700">
                Best Time: <strong>7–10 PM</strong>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Best place for dosa, bajji, jalebi & more!
              </p>
            </div>
          </div>
        </motion.section>

        {/* WHAT TO PACK */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">What to Pack</h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li>✔ Light jacket for cool evenings</li>
              <li>✔ Comfortable shoes for long walks</li>
              <li>✔ Sunscreen & sunglasses</li>
              <li>✔ Umbrella (weather is unpredictable!)</li>
              <li>✔ Camera for scenic spots</li>
              <li>✔ Power bank for day trips</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/attractions/bagpack.jpg"
              alt="Packing illustration"
              width={250}
              height={250}
              className="opacity-90 drop-shadow-xl rounded-lg"
            />
          </motion.div>
        </motion.section>

        {/* TRANSPORT */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold text-center">
            Getting Around Bengaluru
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border text-center">
              <Train size={40} className="mx-auto text-violet-700 mb-3" />
              <h3 className="font-semibold text-xl">Namma Metro</h3>
              <p className="text-gray-700 mt-2">
                Fastest way to reach major hubs like MG Road & Indiranagar.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border text-center">
              <Bus size={40} className="mx-auto text-violet-700 mb-3" />
              <h3 className="font-semibold text-xl">BMTC Buses</h3>
              <p className="text-gray-700 mt-2">
                Budget-friendly & reliable public transport.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border text-center">
              <Map size={40} className="mx-auto text-violet-700 mb-3" />
              <h3 className="font-semibold text-xl">Cabs & Autos</h3>
              <p className="text-gray-700 mt-2">
                Convenient for short distances. Ola & Uber recommended.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SAFETY */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-violet-700" size={30} />
              <h2 className="text-3xl font-bold">Travel Safety Tips</h2>
            </div>

            <ul className="space-y-3 text-lg text-gray-700">
              <li>✔ Keep your phone and valuables secure</li>
              <li>✔ Prefer metro or cabs late at night</li>
              <li>✔ Stay hydrated during long walks</li>
              <li>✔ Follow safety guidelines at parks</li>
              <li>✔ Save emergency helpline numbers</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/attractions/bengaluru.png"
              alt="Safety illustration"
              width={260}
              height={260}
              className="opacity-90 drop-shadow-xl rounded-lg"
            />
          </motion.div>
        </motion.section>

        {/* ITINERARIES */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Suggested Itineraries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* One Day */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border">
              <h3 className="font-semibold text-xl mb-3">1-Day Trip</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Lalbagh Botanical Garden</li>
                <li>• Vidhana Soudha</li>
                <li>• Cubbon Park</li>
                <li>• Church Street Cafés</li>
              </ul>
            </div>

            {/* Two Day */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border">
              <h3 className="font-semibold text-xl mb-3">2-Day Trip</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Nandi Hills Sunrise</li>
                <li>• Bangalore Palace</li>
                <li>• Commercial Street</li>
                <li>• MG Road Nightlife</li>
              </ul>
            </div>

            {/* Three Day */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border">
              <h3 className="font-semibold text-xl mb-3">3-Day Trip</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Bannerghatta Safari</li>
                <li>• Iskcon Temple</li>
                <li>• HAL Aerospace Museum</li>
                <li>• UB City + Indiranagar Cafés</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 bg-white/70 backdrop-blur-xl p-12 rounded-3xl shadow-xl border"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Book Your Next Tour to Bengaluru 🌆
          </h2>

          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
            From gardens to palaces, cafés to tech parks — Bengaluru welcomes
            you with open arms. Let us help you plan a memorable trip to the
            heart of Karnataka.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-4 bg-violet-700 text-white rounded-2xl text-lg font-semibold shadow-xl hover:bg-violet-800 transition"
          >
            Contact Us & Start Planning
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
