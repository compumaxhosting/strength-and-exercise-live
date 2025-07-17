import BackToTop from "@/components/BackToTop"
import Blog from "@/components/Blog"
import ContactInformation from "@/components/ContactInformation"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

const blogPage = () => {
  return (
    <>
    <Header />
    <Blog />
    <ContactInformation />
    <Footer />
    <BackToTop />
    </>
  )
}

export default blogPage