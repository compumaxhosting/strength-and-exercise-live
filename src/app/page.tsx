import About from "@/components/About";
import AboutCoach from "@/components/AboutCoach";
import Appointment from "@/components/Appointment";
import BackToTop from "@/components/BackToTop";
import Blog from "@/components/Blog";
import ContactInformation from "@/components/ContactInformation";
import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapArea from "@/components/MapArea";
import PeeyushRanjan from "@/components/PeeyushRanjan";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <About/>
    <Service/>
    <Faq/>
    <AboutCoach/>
    <WhyWorkWithMe/>
    <PeeyushRanjan/>
    <Testimonials/>
    <Appointment/>
    <Blog/>
    <ContactUs/>
    <MapArea/>
    <ContactInformation/>
    <Footer/>
    <BackToTop />
   </div>
  );
}
