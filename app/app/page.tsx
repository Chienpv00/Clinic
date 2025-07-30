"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"
import GallerySection from "./components/GallerySection"
import AppointmentSection from "./components/AppointmentSection"
import Footer from "./components/Footer"
import { Language } from "./lib/translations"

export default function ClinicWebsite() {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <ServicesSection language={language} />
      <GallerySection language={language} />
      <AppointmentSection language={language} />
      <Footer language={language} />
    </div>
  )
}
