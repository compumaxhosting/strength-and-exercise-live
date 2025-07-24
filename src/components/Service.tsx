"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Personal Exercise design and training",
    description:
      "Specialized one - on one exercises designed by a Physical therapist and corrective exercise specialist to overcome your mental fears",
    image: "/service-4.jpeg",
  },
  {
    title: "Geriatric Strength training for older adults",
    description:
      "Research suggests better muscle mass is one of the key factors for longevity. Strength training with a good understanding of age related concerns and expertise as a physical therapist can help older adults maintain and improve muscle mass, strength, power, and quality of life. It can also help reduce the risk of falls and frailty.",
    image: "/service-6.jpg",
  },
  {
    title: "Strength and conditioning for desk warriors",
    description:
      "Break free from your chairs and reclaim your bodies. Through our programs designed focusing on your specific problems like Low back pain, lack of energy",
    image: "/service-2.jpeg",
  },
];

export default function Service() {
  const router = useRouter();

  return (
    <section className="relative bg-white dark:bg-black py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-[#f36100] bg-clip-text">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Push Your <span className="font-medium text-[#f36100]">Limits</span> Forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ title, description, image }) => (
            <motion.div
              key={title}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-b from-white/80 to-gray-50 dark:from-gray-900/90 dark:to-gray-800/80 rounded-2xl p-6 shadow-lg border border-[#f36100]/10"
            >
              <div className="relative aspect-video mb-4 rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover hover:scale-105 transition"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                <span className="text-[#f36100]">◆</span> {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            onClick={() => router.push("/services")}
            whileHover={{ scale: 1.05 }}
            className="bg-[#f36100] text-white px-6 py-3 rounded-full font-semibold"
          >
            View All Services
          </motion.button>
        </div>
      </div>
    </section>
  );
}
