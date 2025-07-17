
import BackToTop from "@/components/BackToTop"
import ContactInformation from "@/components/ContactInformation"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MapArea from "@/components/MapArea"
import React from "react"

const page = () => {
  return (
    <div>
        <Header/>
        <ContactUs/>
        <MapArea/>
        <ContactInformation/>
        <Footer/>
        <BackToTop />
    </div>
  )
}

export default page