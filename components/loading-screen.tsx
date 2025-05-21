"use client"

import { useEffect, useState } from "react"
import { Leaf } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-emerald-800 to-emerald-600">
      <div className="relative">
        <Leaf className="h-16 w-16 text-white animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full border-4 border-t-transparent border-white animate-spin"></div>
        </div>
      </div>
      <h2 className="mt-8 text-2xl font-semibold text-white">Winata Home Spa Bali</h2>
      <p className="mt-2 text-emerald-100">Loading a relaxing experience...</p>

      {/* Loading bar */}
      <div className="w-64 h-1.5 bg-white/20 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-white rounded-full animate-loading-bar"></div>
      </div>
    </div>
  )
}
