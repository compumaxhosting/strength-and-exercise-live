"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "Y0_LzrlPygk";

  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#f36100]/10 rounded-full blur-3xl opacity-70" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#f36100]/10 rounded-full blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <span className="text-[#f36100] font-semibold text-sm uppercase">Our Approach</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About <span className="text-[#f36100]">Optimal Strength</span> Method
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            <p><strong className="text-[#f36100]">THE CORRECTIVE OPTIMAL STRENGTH METHOD</strong></p>
            <p>We help you gain strength and reach optimal fitness through corrective training so you never feel trapped in a body that doesn’t cooperate.</p>
            <p>We’re committed to helping you restore mobility, improve strength, and enhance life safely.</p>
            <p><span className="font-semibold text-[#f36100]">Discover the difference of expert corrective exercise — your health is our top priority.</span></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-[#f36100]/20"
        >
          <AnimatePresence>
            {!showVideo ? (
              <motion.div
                key="thumb"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px)100vw,50vw"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20">
                  <div className="w-16 h-16 bg-[#f36100] rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
                      <path d="M4.5 5.653c0-1.426 1.53-2.33 2.78-1.643l11.54 6.348c1.29.712 1.29 2.573 0 3.285L7.28 19.99c-1.25.688-2.78-.217-2.78-1.643V5.653z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.iframe
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`}
                title="Optimal Strength Method"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
