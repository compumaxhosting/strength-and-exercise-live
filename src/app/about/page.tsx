import About from "@/components/About"
import AboutCoach from "@/components/AboutCoach"
import BackToTop from "@/components/BackToTop"
import ContactInformation from "@/components/ContactInformation"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import WhyWorkWithMe from "@/components/WhyWorkWithMe"
import React from "react"

const page = () => {
  return (
    <div>
        <Header />
        <About />
        <AboutCoach />
        <WhyWorkWithMe />
        <ContactInformation />
        <Footer />
        <BackToTop />
    </div>
  )
}

export default page