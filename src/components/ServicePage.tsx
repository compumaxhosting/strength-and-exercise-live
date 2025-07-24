"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  { title: "Ergonomic exercises", desc: "Training particularly for neck stiffness, Low back pain, shoulder tightness and posture correction.", img: "/service-1.jpeg" },
 { title: "Geriatric Strength training for older adults", desc: "Research suggests better muscle mass is one of the key factors for longevity. Strength training with a good understanding of age related concerns and expertise as a physical therapist can help older adults maintain and improve muscle mass, strength, power, and quality of life. It can also help reduce the risk of falls and frailty.", img: "/service-6.jpg" },
  { title: "Personal Exercise design and training", desc: "Specialized one - on one exercises designed by a Physical therapist and corrective exercise specialist to overcome your mental fears.", img: "/service-3.jpg" },
  { title: "Therapy for Joint stiffness and muscle soreness", desc: "Effective therapies to reduce joint stiffness and muscular tension for pain relief and improved mobility.", img: "/service-4.jpeg" },
  { title: "Functional Exercises and Physical education for Children", desc: "In today's world of unlimited distractions and lack of physical activities we work on creating future generations with healthy resilient minds inside strong bodies through Exercise training designed specifically for children.", img: "/service-5.jpg" },
  { title: "Strength and conditioning for desk warriors", desc: "Break free from your chairs and reclaim your bodies . Through our programs designed focusing on your specific problems like Low back pain, lack of energy.", img: "/service-2.jpeg" },
  { title: "Group Strength and Conditioning Training", desc: "Whether new to training, retraining after a long break, people with a history of pains and Injuries, or regular and Advanced. The group training is structured accordingly for all people to progress at varying fitness levels.", img: "/service-7.jpeg" }
];

export default function Service() {
  const router = useRouter();
  return (
    <section className="bg-white dark:bg-black py-12 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-[#f36100] to-orange-300 bg-clip-text">Services</span>
          </h2>
          <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Push Your <span className="font-medium text-[#f36100]">Limits</span> Forward
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {/* Responsive 2-2-2-1 layout */}
          {[services.slice(0,2), services.slice(2,4), services.slice(4,6), [services[6]]].map((row,i) => (
            <div key={i} className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 ${i === 3 ? 'max-w-2xl mx-auto' : ''}`}>
              {row.map(({title,desc,img}) => (
                <motion.div 
                  key={title} 
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-b from-white/80 to-gray-50 dark:from-gray-900/90 dark:to-gray-800/80 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md md:shadow-lg border border-[#f36100]/10 ${i === 3 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="relative aspect-video mb-3 md:mb-4 rounded-lg md:rounded-xl overflow-hidden">
                    <Image 
                      src={img} 
                      alt={title} 
                      fill 
                      className="object-cover hover:scale-105 transition" 
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-gray-800 dark:text-white">
                    <span className="text-[#f36100]">◆</span> {title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <motion.button 
            onClick={() => router.push('/appointment')} 
            whileHover={{ scale: 1.05 }}
            className="bg-[#f36100] to-orange-400 text-white px-5 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full font-semibold"
          >
            Book an Appointment
          </motion.button>
        </div>
      </div>
    </section>
  );
}