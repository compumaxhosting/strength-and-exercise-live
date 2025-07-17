"use client";

import { motion } from "framer-motion";

export default function WhyWorkWithMe() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Decorative elements with #f36100 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#f36100] rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-[#f36100] rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Heading with orange accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#f36100] dark:text-[#f36100]">
            Why Work With Me?
          </h2>
          <div className="w-24 h-1.5 bg-[#f36100] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Paragraph with orange highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl shadow-sm border border-[#f36100]/20 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
        >
          <p className="mb-6">
            With over <span className="text-[#f36100] font-medium">14 years of experience</span> in physical therapy, corrective exercise, and wellness coaching, I&apos;ve had the privilege of working with a diverse range of clients—from celebrities and film actors to sports professionals, antenatal clients, and individuals from all walks of life.
          </p>
          
          <p className="mb-6">
            My career spans being a <span className="text-[#f36100] font-medium">TV health show host</span>, a health magazine contributor, and even training other fitness professionals as a seminar staff and training manager for leading organizations like <span className="text-[#f36100] font-medium">Apollo Life and Cultfit</span>.
          </p>
          
          <p className="mb-6">
            At <span className="text-[#f36100] font-medium">Strength and Exercise</span>, my goal isn&apos;t just to get you moving, but to help you <span className="text-[#f36100] font-medium">move right</span>—correcting dysfunctional movement patterns, building strength from the ground up, and creating a sustainable path toward your health goals.
          </p>
          
          <p className="text-[#f36100] font-medium italic">
            &apos;In today&apos;s fast-paced world filled with lifestyle diseases and constant distractions, I believe changing even one life at a time can make a difference.&apos;
          </p>
        </motion.div>
      </div>
    </section>
  );
}