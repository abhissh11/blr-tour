"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  // ----------------- FORM STATE -----------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    // Reset fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-violet-200 py-20 px-6 overflow-hidden">
      {/* Floating Aura Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 left-10 h-64 w-64 rounded-full bg-violet-300 blur-3xl opacity-40"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1.2 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-10 right-5 h-64 w-64 rounded-full bg-amber-200 blur-3xl opacity-40"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h1 className="text-5xl font-black text-gray-900 drop-shadow-md">
          Namma Bengaluru <span className="text-violet-700">Welcomes You!</span>
        </h1>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Got questions? Need help planning your trip? Want recommendations?
          Swagatha! We&apos;re here to make your Bengaluru journey smooth, warm,
          and unforgettable.
        </p>
      </motion.div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-white/40"
        >
          <h2 className="text-3xl font-bold mb-6">Reach Out</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Whether you&apos;re planning a short trip, exploring local finds, or
            discovering hidden gems, Team Bengaluru is here to help.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-violet-700" size={28} />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">hello@namma-bengaluru.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-violet-700" size={28} />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-violet-700" size={28} />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-600">
                  Tourism Office, MG Road, Bengaluru, Karnataka
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-white/40 space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>

          <div>
            <label className="font-medium">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="font-medium">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="font-medium">Message</label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="w-full mt-4 py-3 rounded-xl bg-violet-700 text-white font-semibold shadow-md hover:bg-violet-800 transition"
          >
            Send Message ✉️
          </motion.button>
        </motion.form>
      </div>

      {/* Footer line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mt-20 text-gray-700 italic"
      >
        Namma ooru, nimma journey. Let&apos;s explore Bengaluru together. 💜
      </motion.p>
    </div>
  );
}
