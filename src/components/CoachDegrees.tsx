"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const degrees = [
  { src: "/degree.png", title: "Bachelor of Physiotherapy (BPT)" },
  { src: "/nasm-certificate.jpeg", title: "NASM Certified Corrective Exercise Specialist" },
  { src: "/ekfa-certificate.png", title: "EKFA Certified Fitness Professional" },
];

export default function CoachDegrees() {
  return (
     <section className="bg-gray-50 dark:bg-gray-950 pb-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">
    
          <div className="max-w-6xl mx-auto space-y-12 relative z-10">
           <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-10"
    >
      {/* Credentials Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white border-l-4 border-[#f36100] pl-4">
          Credentials
        </h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-2 marker:text-[#f36100]">
          <li>Bachelor of Physiotherapy (BPT)</li>
          <li>NASM Certified Corrective Exercise Specialist</li>
          <li>Certified Kettlebell Instructor (CKI)</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 italic text-lg">
          Also holds several advanced certifications in physiotherapy and fitness.
        </p>
      </div>

      {/* Degrees & Certificates Grid */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
          <span className="border-b-2 border-[#f36100] pb-1">Certifications & Degrees</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {degrees.map((degree, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="w-full rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 flex flex-col border border-[#f36100]/20 hover:border-[#f36100]/40 transition-all"
            >
              <div className="relative w-full h-96 p-4 bg-white dark:bg-gray-900">
                <Image
                  src={degree.src}
                  alt={degree.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 text-center font-medium text-gray-800 dark:text-gray-200 bg-[#f36100]/10 dark:bg-[#f36100]/5">
                {degree.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
          </div>
        </section>
  );
}
