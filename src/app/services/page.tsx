import BackToTop from "@/components/BackToTop"
import ContactInformation from "@/components/ContactInformation"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ServicePage from "@/components/ServicePage"
import React from "react"

const page = () => {
  return (
    <div>
        <Header />
        <ServicePage />
        <ContactInformation />
        <Footer />
        <BackToTop />
    </div>
  )
}

export default page