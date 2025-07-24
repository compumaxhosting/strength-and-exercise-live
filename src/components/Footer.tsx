"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    setYear(new Date().getFullYear());

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-300 pt-8 pb-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 items-start">
        {/* Logo + Description */}
        <div className="max-w-md">
          <Image
            src={isDarkMode ? "/logo-white.png" : "/logo-black.png"}
            alt="Company Logo"
            width={100}
            height={60}
            style={{ width: "auto", height: "auto" }}
            priority
          />
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-justify max-w-3/4">
  With the Corrective Optimal Strength Method, we believe in a client-centric, tailored approach designed to meet the individual and specific needs of each person. We help clients reach their optimal strength without causing muscle imbalances or overtraining that can lead to injury or old pain flaring up.
</p>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link href="/" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/" className="hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2"><Phone size={16} />998-5173-876</p>
            <p className="flex items-center gap-2"><Mail size={16} />faiz.strengthandfitness@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.facebook.com/people/Strength-Exercise/61573804514616/?rdid=lDsNWBEoilnbDU6u&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18pc8g4i5E%2F" target="_blank"><Facebook className="w-5 h-5 hover:text-primary" /></Link>
              <Link href="https://www.instagram.com/strengthandexercise/?utm_source=qr#" target="_blank"><Instagram className="w-5 h-5 hover:text-primary" /></Link>
              <Link href="https://youtube.com/@strengthandexercise?si=PEGlCHcJF0mq2xsh" target="_blank"><FaYoutube className="w-5 h-5 hover:text-primary" /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {year ?? "..."} StrengthAndExercise. All rights reserved.
      </div>
    </footer>
  );
}
