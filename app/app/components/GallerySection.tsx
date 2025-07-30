import Image from "next/image"
import { translations, Language } from "../lib/translations"

interface GallerySectionProps {
  language: Language
}

export default function GallerySection({ language }: GallerySectionProps) {
  const t = translations[language]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.ourFacility}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.galleryDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative h-96 lg:h-full">
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt={t.clinicReception}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-44">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt={t.examinationRoom}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="relative h-44">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt={t.medicalLaboratory}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="relative h-44">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt={t.waitingArea}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="relative h-44">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt={t.consultationRoom}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 