import Appointment from "@/components/Appointment"
import BackToTop from "@/components/BackToTop"
import ContactInformation from "@/components/ContactInformation"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MapArea from "@/components/MapArea"
import React from "react"

const page = () => {
  return (
    <div>
        <Header/>
        <Appointment/>
        <MapArea/>
        <ContactInformation/>
        <Footer/>
        <BackToTop />
    </div>
  )
}

export default page