"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

interface PriceOption {
  duration: string
  price: string
}

interface ServiceCardProps {
  title: string
  description: string
  prices: PriceOption[]
}

export default function ServiceCard({ title, description, prices }: ServiceCardProps) {
  const handleBookNow = () => {
    const message = encodeURIComponent(`Hello, I would like to book a ${title} service.`)
    window.open(`https://wa.me/6281413215200?text=${message}`, "_blank")
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-emerald-50 border-b">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-3 mb-6">
          {prices.map((option, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm font-medium">{option.duration}</span>
              <span className="font-semibold">Rp {option.price}</span>
            </div>
          ))}
        </div>
        <Button onClick={handleBookNow} className="w-full bg-emerald-600 hover:bg-emerald-700">
          <MessageSquare className="mr-2 h-4 w-4" />
          Book Now
        </Button>
      </CardContent>
    </Card>
  )
}
