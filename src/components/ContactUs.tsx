import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";

export default function ContactUs() {
  return (
    <section className="bg-gray-50 dark:bg-black py-10 sm:py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#f36100] dark:text-[#f36100] mb-8 sm:mb-12">
        Contact Us
      </h2>

      {/* Responsive box */}
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
