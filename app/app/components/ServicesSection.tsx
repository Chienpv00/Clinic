import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, Activity, UserCheck } from "lucide-react"
import { translations, Language } from "../lib/translations"

interface ServicesSectionProps {
  language: Language
}

export default function ServicesSection({ language }: ServicesSectionProps) {
  const t = translations[language]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.ourServices}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.servicesDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.generalMedicine}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.generalMedicineDesc}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.cardiology}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.cardiologyDesc}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <UserCheck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.pediatrics}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.pediatricsDesc}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 