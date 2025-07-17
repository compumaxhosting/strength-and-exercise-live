"use client";

import { MapPin } from "lucide-react";

export default function MapArea() {
  return (
    <section className="w-full px-4 py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#f36100] dark:text-[#f36100] mb-6">
          Visit Our Clinic
        </h2>

        {/* Address */}
        <div className="flex flex-col items-center gap-2 text-gray-700 dark:text-gray-300 mb-6">
          <MapPin size={20} />
          <p className="text-center font-medium">
            PhysioFit – Chiropractic and Physiotherapy Center
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.742016638083!2d78.42597847591095!3d17.424164101743198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9700754e5fd5%3A0x938ccbafc6ad9f36!2sPhysioFit%20-Chiropractic%20and%20Physiotherapy%20Center!5e0!3m2!1sen!2sin!4v1751383752903!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PhysioFit Clinic Map"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
