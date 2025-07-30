import { Heart, Phone, Mail, MapPin } from "lucide-react"
import { translations, Language } from "../lib/translations"

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">{t.clinicName}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t.footerDescription}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contactInfo}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@healthcareclinic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">123 Medical Center Dr, City, State 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.officeHours}</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>{t.mondayFriday}</span>
                <span>{t.hours1}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.saturday}</span>
                <span>{t.hours2}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.sunday}</span>
                <span>{t.emergencyOnly}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
} 