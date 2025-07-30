import { Button } from "@/components/ui/button"
import { Calendar, Shield } from "lucide-react"
import Image from "next/image"
import { translations, Language } from "../lib/translations"

interface HeroSectionProps {
  language: Language
}

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t.welcomeTitle}
              <span className="text-blue-600 block">{t.healthcareClinic}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                {t.bookAppointmentBtn}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                {t.learnMoreBtn}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-100 rounded-2xl p-8">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Modern clinic interior"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.trustedCare}</p>
                  <p className="text-sm text-gray-600">{t.yearsExperience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 