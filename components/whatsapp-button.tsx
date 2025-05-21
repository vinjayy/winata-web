"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface WhatsAppButtonProps {
  phoneNumber: string
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const { t } = useLanguage()

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I would like to book a spa treatment.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <>
      <Button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg flex items-center gap-2 px-6 py-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 border-0 animate-pulse hover:animate-none"
        aria-label="Contact via WhatsApp"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="font-medium">{t("whatsapp.button")}</span>
      </Button>

      {isPopupOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-xl p-5 w-80 animate-in fade-in slide-in-from-bottom-5 border border-green-100">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg">{t("whatsapp.title")}</h3>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setIsPopupOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{t("whatsapp.description")}</p>
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 border-0 shadow-md"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            {t("whatsapp.chat")}
          </Button>
        </div>
      )}
    </>
  )
}
