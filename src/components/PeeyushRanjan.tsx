"use client";

import { motion } from "framer-motion";

export default function PeeyushRanjan() {
  return (
    <section className="bg-white dark:bg-gray-950 py-8 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64" />
      <div className="absolute -top-20 -right-20 w-72 h-72" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading with orange accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f36100] dark:text-[#f36100]">
            Review by Piyush Ranjan
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">(Software Engineer)</p>
          <div className="w-24 h-1 bg-[#f36100] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Video + Text Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-[#f36100]/20"
        >
          {/* Video with orange accent */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 rounded-xl border-2 border-[#f36100]/30 group-hover:border-[#f36100]/50 transition-all duration-300 pointer-events-none" />
            <video
              className="w-full h-auto rounded-lg shadow-md"
              controls
              poster="/peeyushreview.png"
            >
              <source src="/peeyush-ranjan.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content with orange highlights */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left">
              <span className="text-[#f36100] font-medium">Piyush Ranjan</span>, a dedicated software engineer, came to me with chronic posture-related issues due to long hours at a desk. After a <span className="text-[#f36100] font-medium">customized corrective and strengthening plan</span>, his condition drastically improved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}