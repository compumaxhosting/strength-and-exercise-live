import AboutCoach from "@/components/AboutCoach"
import BackToTop from "@/components/BackToTop"
import CoachDegrees from "@/components/CoachDegrees"
import ContactInformation from "@/components/ContactInformation"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

const page = () => {
  return (
    <div>
        <Header/>
        <AboutCoach/>
        <CoachDegrees/>
        <ContactInformation/>
        <Footer/>
        <BackToTop />
    </div>
  )
}

export default page