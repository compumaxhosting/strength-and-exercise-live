"use client";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mohammed Ismail",
    content:
      "The personal training program has completely transformed my strength and flexibility. I have never felt better!",
    rating: 5,
  },
  {
    name: "A. Venkatesh",
    content:
      "I have seen significant improvement in my recovery time thanks to the tailored therapy program. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael",
    content:
      "The team’s holistic approach to strength and conditioning has helped me achieve my fitness goals faster than I expected.",
    rating: 5,
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current!);
  }, [current]);

  return (
    <section className="bg-white dark:bg-gray-950 py-8 px-6 sm:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#f36100]">What Clients Say</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Real stories. Real results.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white bg-[#f36100] dark:bg-gray-700">
                    {getInitials(t.name)}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{t.name}</h3>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${
                        j < t.rating ? "text-[#f36100] fill-[#f36100]" : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="italic text-gray-600 dark:text-gray-300">{t.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
