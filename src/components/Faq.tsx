"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is Strength & Conditioning Training?",
    a: "Strength & conditioning training is a combination of exercises designed to improve overall fitness, strength, endurance, and flexibility, aimed at enhancing athletic performance and preventing injuries.",
  },
  {
    q: "How often should I train for strength and conditioning?",
    a: "For optimal results, strength and conditioning training should be done 3 to 4 times a week, depending on your fitness level and goals. It's also essential to include rest days for recovery.",
  },
  {
    q: "Can strength training help with injury recovery?",
    a: "Yes, strength training can significantly aid in injury recovery by improving the mobility, strength, and stability of muscles and joints, which can prevent further injuries.",
  },
  {
    q: "How can I personalize my fitness program?",
    a: "Your fitness program can be personalized based on your current health, fitness level, and specific goals. Working with a trainer or coach to develop a customized plan can ensure the best results.",
  },
  {
    q: "What is the difference between strength training and rehabilitation?",
    a: "Strength training focuses on building overall muscle strength, while rehabilitation is tailored to help you recover from injuries. Rehabilitation exercises are more specialized and focused on injury rehabilitation and prevention.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#f36100]/10 rounded-full blur-3xl opacity-70 dark:opacity-30" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#f36100]/10 rounded-full blur-3xl opacity-70 dark:opacity-30" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f36100]">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Find answers to some of the most common questions we get.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-colors hover:border-[#f36100]/30">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-6 font-medium text-left"
                aria-expanded={open === i}
              >
                <span className={`text-lg ${open === i ? "text-[#f36100]" : "text-gray-800 dark:text-white"}`}>{q}</span>
                <span className={`ml-4 text-xl transition-transform ${open === i ? "rotate-180 text-[#f36100]" : "text-gray-500"}`}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-[#f36100]/20"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-300">{a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
