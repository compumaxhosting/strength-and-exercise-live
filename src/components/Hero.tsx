"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {["", " animation-delay-2000", " animation-delay-4000"].map((delay, i) => (
          <div
            key={i}
            className={`absolute w-64 h-64 md:w-72 md:h-72 bg-[#f36100]/10 rounded-full mix-blend-multiply blur-3xl opacity-70 dark:opacity-30 dark:mix-blend-screen animate-blob${delay}`}
            style={{
              top: i === 0 ? 0 : i === 1 ? "50%" : "auto",
              left: i === 0 ? "25%" : i === 2 ? "50%" : "auto",
              right: i === 1 ? "25%" : "auto",
              bottom: i === 2 ? 0 : "auto",
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 py-10 z-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight" variants={item}>
            Restore Your Strength<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f36100] to-[#f36100]/80">Move Without Pain</span>
          </motion.h1>
          <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0" variants={item}>
            Expert physical therapy tailored to your needs. Regain mobility, reduce pain, and get back to doing what you love.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={item}>
            <Link href="/appointment" className="relative px-6 py-3 md:px-8 md:py-4 font-medium text-white rounded-xl bg-gradient-to-r from-[#f36100] to-[#f36100]/90 hover:to-[#f36100]/80 transition-all">
              Book an Appointment
            </Link>                   
            <Link href="/services" className="relative px-6 py-3 md:px-8 md:py-4 font-medium border-2 border-[#f36100] text-[#f36100] rounded-xl hover:bg-[#f36100]/10 transition-all">
              Our Services
            </Link>
          </motion.div>
          <motion.div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400 pt-2" variants={item}>
            {["Pain Relief", "Personalized Care"].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#f36100]/10 flex items-center justify-center rounded-full">
                  <CheckIcon className="w-4 h-4 text-[#f36100]" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        {/* Image */}
        <motion.div
          className="flex-1 relative w-full max-w-md md:max-w-2xl aspect-square order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f36100]/10 to-[#f36100]/5 rounded-3xl -rotate-3" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#f36100]/5 to-[#f36100]/10 rounded-3xl rotate-3" />
          <div className="relative h-full w-full overflow-hidden border-8 border-white dark:border-gray-800 rounded-3xl shadow-2xl">
            <Image
              src="/hero-1.png"
              alt="Physical therapist helping patient"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
