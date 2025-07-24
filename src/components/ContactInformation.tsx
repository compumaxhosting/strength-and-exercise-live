"use client";

import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInformation() {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="mt-1 text-[#f36100]">
              <FaPhone className="text-lg" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">PHONE</h3>
              <a 
                href="tel:9985173876" 
                className="text-gray-800 dark:text-gray-200 hover:text-[#f36100] transition-colors text-base"
              >
                998-5173-876
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="mt-1 text-[#f36100]">
              <FaMapMarkerAlt className="text-lg" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">LOCATIONS</h3>
              <div className="space-y-1 text-gray-800 dark:text-gray-200 text-base">
                <p className="font-semibold">PhysioFit – Chiropractic and Physiotherapy Center</p>
                <p>Imran Plaza, 3rd Floor, Road 2, Srinagar</p>
                <p>Colony Main Rd, Banjara Hills, Hyd, TS 500034</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="mt-1 text-[#f36100]">
              <FaEnvelope className="text-lg" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">EMAIL</h3>
              <a 
                href="mailto:faiz.strengthandfitness@gmail.com" 
                className="text-gray-800 dark:text-gray-200 hover:text-[#f36100] transition-colors text-base"
              >
                faiz.strengthandfitness@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}   