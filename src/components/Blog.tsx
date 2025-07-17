"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    title: "Why Personal Training is Key for Exercising",
    summary:
      "As a Physical therapist and certified corrective exercise specialist, I use tailored workout plans that complement physical therapy to strengthen the body, restore movement and mobility, aid effective exercise recovery and safely build muscle mass.",
    image: "/blog-1.jpeg",
    date: "June 15, 2025",
    bullets: [
      ["Lower Back Pain", "Shoulder Impingement", "Rotator Cuff Injuries"],
      ["Muscle Imbalances", "Poor Biomechanics", "Post-Surgery Rehabilitation"],
    ],
  },
  {
    title: "The Power of Posture Correction",
    summary:
      "Improper posture causes discomfort and can lead to chronic pain. I specialize in posture correction to alleviate these issues and restore quality of life.",
    image: "/blog-2.jpeg",
    date: "June 8, 2025",
    bullets: [
      ["Tension Headaches", "Thoracic Outlet Syndrome"],
      ["Kyphosis", "Lordosis", "Cervical Radiculopathy"],
    ],
  },
  {
    title: "Personal Training for Optimal Recovery",
    summary:
      "Tailored workout plans complement physical therapy to heal the body faster. This balanced approach ensures long-term benefits for various conditions.",
    image: "/blog-3.jpeg",
    date: "May 28, 2025",
    bullets: [
      ["Chronic Lower Back Pain", "Joint Instability"],
      ["Shoulder Impingement", "Rotator Cuff Injuries"],
    ],
  },
];

export default function Blog() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#f36100] mb-3">
            OUR BLOG
          </h1>
          <div className="w-24 h-1.5 bg-[#f36100] mx-auto rounded-full" />
        </motion.div>

        {/* Blog Posts */}
        <div className="grid gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="md:w-5/12 relative aspect-[4/3] min-h-[250px] bg-gray-100 dark:bg-gray-800 border-r border-[#f36100]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority={i === 0} // ✅ Prioritize only first image for LCP
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  quality={80}
                />
              </div>

              {/* Content */}
              <div className="md:w-7/12 p-6 md:p-8 flex flex-col">
                <span className="text-[#f36100] font-medium text-sm mb-2">
                  {post.date}
                </span>
                <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.summary}
                </p>

                <div className="mt-auto space-y-3">
                  {post.bullets.map((group, j) => (
                    <ul key={j} className="space-y-2">
                      {group.map((item, k) => (
                        <li
                          key={k}
                          className="flex items-start text-base text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-[#f36100] mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
