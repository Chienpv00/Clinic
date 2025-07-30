import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { Language } from "../lib/translations"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <Button
        variant={currentLanguage === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("en")}
        className="h-8 px-3"
      >
        EN
      </Button>
      <Button
        variant={currentLanguage === "vi" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("vi")}
        className="h-8 px-3"
      >
        VI
      </Button>
    </div>
  )
} 