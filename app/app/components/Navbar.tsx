import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import LanguageSwitcher from "./LanguageSwitcher"
import { translations, Language } from "../lib/translations"
import Image from "next/image"

interface NavbarProps {
  language: Language
  onLanguageChange: (language: Language) => void
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const t = translations[language]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg">
              <Image 
                src="/assets/logo.jpg" 
                alt="Clinic Logo" 
                width={32} 
                height={32}
                className="w-8 h-8 rounded"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">{t.clinicName}</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.home}
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.services}
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.gallery}
            </a>
            <a href="#appointment" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.bookAppointment}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher 
              currentLanguage={language} 
              onLanguageChange={onLanguageChange} 
            />
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              {t.callNow}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 