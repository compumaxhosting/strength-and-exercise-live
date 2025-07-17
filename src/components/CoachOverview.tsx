"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CoachOverview() {
  const pathname = usePathname(); // ✅ Detect current route

  return (
    <>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#f36100]">
          About the Coach
        </h1>
        <div className="w-24 h-1 bg-[#f36100] mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Image + Name */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-6 text-justify md:text-left"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#f36100] shadow-lg">
          <Image
            src="/dr-faiz.jpeg"
            alt="Dr. Syed Faiz"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 200px"
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Dr. Syed Faiz
          </h2>
          <p className="text-[#f36100] font-medium mt-1">
            Physical Therapist & Corrective Exercise Specialist
          </p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl border border-[#f36100]/20 shadow-sm space-y-4"
      >
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify">
          Dr. Syed Faiz is a Physical therapist from Apollo Hospitals, a Corrective Exercise Specialist from NASM and a wellness Consultant with an experience of 14 years in this domain. He&apos;s been a TV health show host, writer for health magazines and an Exercise and fitness coach during this journey. He&apos;s helped with the training of hundreds of individuals over the years , enabling them reach their health goals. Along the course he&apos;s trained several fitness trainers for strength and conditioning as a seminar staff and training manager for companies like Apollo life, Cultfit etc. His clients include celebrities, Film actors, sports persons, VIPs, antenatal clients and people across all age groups. In today&apos;s age of an epidemic of lifestyle diseases and endless distractions we at Strength and Exercise believe it is a blessing to be of assistance to anyone willing to transform their health. Even if it means changing one life at a time.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          He has helped hundreds achieve health goals, trained fitness coaches, and worked with companies like Apollo Life and Cultfit.
        </p>
        <p className="text-[#f36100] font-medium text-lg italic">
          &apos;In today&apos;s age of lifestyle diseases, it&apos;s a blessing to assist anyone willing to transform their health.&apos;
        </p>
      </motion.div>

      {/* Read More Button (conditionally shown) */}
      {pathname !== "/about-coach" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="pt-4 text-center"
        >
          <Link
            href="/about-coach"
            className="inline-block px-6 py-2 bg-[#f36100] text-white font-semibold rounded-full hover:bg-[#d85000] transition-colors duration-300"
          >
            Read More
          </Link>
        </motion.div>
      )}
    </>
  );
}
