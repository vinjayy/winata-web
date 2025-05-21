"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({
    en: {},
    id: {},
  })

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "id")) {
      setLanguage(savedLanguage)
    }

    // Load translations
    const loadTranslations = async () => {
      const enTranslations = await import("@/translations/en.json").then((module) => module.default)
      const idTranslations = await import("@/translations/id.json").then((module) => module.default)

      setTranslations({
        en: enTranslations,
        id: idTranslations,
      })
    }

    loadTranslations()
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en?.[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
