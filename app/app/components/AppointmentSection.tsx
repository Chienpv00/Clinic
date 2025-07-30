import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "lucide-react"
import { translations, Language } from "../lib/translations"

interface AppointmentSectionProps {
  language: Language
}

export default function AppointmentSection({ language }: AppointmentSectionProps) {
  const t = translations[language]

  return (
    <section id="appointment" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.bookAnAppointment}</h2>
          <p className="text-xl text-gray-600">
            {t.appointmentDescription}
          </p>
        </div>

        <Card className="bg-white shadow-xl">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    {t.fullName}
                  </Label>
                  <Input id="name" placeholder={t.fullNamePlaceholder} className="mt-1 h-12" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    {t.phoneNumber}
                  </Label>
                  <Input id="phone" placeholder={t.phoneNumberPlaceholder} className="mt-1 h-12" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                    {t.preferredDate}
                  </Label>
                  <Input id="date" type="date" className="mt-1 h-12" />
                </div>
                <div>
                  <Label htmlFor="time" className="text-sm font-medium text-gray-700">
                    {t.preferredTime}
                  </Label>
                  <Input id="time" type="time" className="mt-1 h-12" />
                </div>
              </div>

              <div>
                <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                  {t.serviceNeeded}
                </Label>
                <Select>
                  <SelectTrigger className="mt-1 h-12">
                    <SelectValue placeholder={t.selectService} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">{t.generalMedicine}</SelectItem>
                    <SelectItem value="cardiology">{t.cardiology}</SelectItem>
                    <SelectItem value="pediatrics">{t.pediatrics}</SelectItem>
                    <SelectItem value="consultation">{t.generalConsultation}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  {t.additionalNotes}
                </Label>
                <Textarea
                  id="message"
                  placeholder={t.additionalNotesPlaceholder}
                  className="mt-1"
                  rows={4}
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg font-medium">
                <Calendar className="h-5 w-5 mr-2" />
                {t.requestAppointment}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 