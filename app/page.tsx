"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, MapPin, Clock, Leaf, MessageCircle, Star, StarHalf } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t, language } = useLanguage()
  const phoneNumber = "62895384334630"

  const handleBookNow = (service: string) => {
    const message =
      language === "en"
        ? `Hello, I would like to book a ${service} service.`
        : `Halo, saya ingin memesan layanan ${service}.`

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col bg-pattern text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-semibold tracking-tight">Winata Home Spa Bali</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              {t("nav.services")}
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              {t("nav.contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-1.jpg?height=800&width=1920"
              alt="Spa background"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-emerald-700/50"></div>
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-2">
                {t("hero.badge")}
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{t("hero.title")}</h1>
              <p className="text-lg md:text-xl text-white/90">{t("hero.description")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 border-0 shadow-lg"
                  onClick={() => handleBookNow("spa")}
                >
                  {t("hero.button.book")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                    className="border-white text-white bg-transparent hover:bg-transparent"                >
                  {t("hero.button.services")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-cream-50 py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-leaf-pattern opacity-5"></div>
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-2">
                  {t("about.badge")}
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-emerald-800">{t("about.title")}</h2>
                <p className="text-muted-foreground text-lg">{t("about.description1")}</p>
                <p className="text-muted-foreground text-lg">{t("about.description2")}</p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                      <Clock className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span>{t("about.feature1")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span>{t("about.feature2")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                      <MessageCircle className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span>{t("about.feature3")}</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/about.jpg?height=800&width=600" alt="Spa treatment" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-white to-cream-50"></div>
          <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                {t("services.badge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-emerald-800 mb-4">{t("services.title")}</h2>
              <p className="text-muted-foreground text-lg">{t("services.description")}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Foot Massage */}
              <Card className="overflow-hidden border-none shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image src="/foot.jpg?height=400&width=600" alt="Foot Massage" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {t("service.badge.popular")}
                  </div>
                </div>
                <CardHeader className="bg-white">
                  <CardTitle className="text-emerald-800">{t("service.footMassage.title")}</CardTitle>
                  <CardDescription>{t("service.footMassage.description")}</CardDescription>
                </CardHeader>
                <CardContent className="bg-white pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">60 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 210.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">90 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 310.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">120 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 400.000</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 border-0"
                    onClick={() => handleBookNow(t("service.footMassage.title"))}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("service.button.book")}
                  </Button>
                </CardContent>
              </Card>

              {/* Balinese Massage */}
              <Card className="overflow-hidden border-none shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image
                    src="/bali.jpg?height=400&width=600"
                    alt="Balinese Massage"
                    fill
                    className="object-cover object-bottom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="bg-white">
                  <CardTitle className="text-emerald-800">{t("service.balinese.title")}</CardTitle>
                  <CardDescription>{t("service.balinese.description")}</CardDescription>
                </CardHeader>
                <CardContent className="bg-white pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">60 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 220.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">90 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 320.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">120 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 420.000</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 border-0"
                    onClick={() => handleBookNow(t("service.balinese.title"))}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("service.button.book")}
                  </Button>
                </CardContent>
              </Card>

              {/* Aroma Therapy Massage */}
              <Card className="overflow-hidden border-none shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image
                    src="/aroma.jpg?height=400&width=600"
                    alt="Aroma Therapy Massage"
                    fill
                    className="object-cover object-bottom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="bg-white">
                  <CardTitle className="text-emerald-800">{t("service.aroma.title")}</CardTitle>
                  <CardDescription>{t("service.aroma.description")}</CardDescription>
                </CardHeader>
                <CardContent className="bg-white pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">90 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 550.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">120 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 700.000</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 border-0"
                    onClick={() => handleBookNow(t("service.aroma.title"))}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("service.button.book")}
                  </Button>
                </CardContent>
              </Card>

              {/* Deep Tissue Massage */}
              <Card className="overflow-hidden border-none shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image
                    src="/deep-tissue.jpg?height=400&width=600"
                    alt="Deep Tissue Massage"
                    fill
                    className="object-cover object-bottom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="bg-white">
                  <CardTitle className="text-emerald-800">{t("service.deepTissue.title")}</CardTitle>
                  <CardDescription>{t("service.deepTissue.description")}</CardDescription>
                </CardHeader>
                <CardContent className="bg-white pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">60 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 320.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">90 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 520.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">120 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 620.000</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 border-0"
                    onClick={() => handleBookNow(t("service.deepTissue.title"))}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("service.button.book")}
                  </Button>
                </CardContent>
              </Card>

              {/* Hot Stone Massage */}
              <Card className="overflow-hidden border-none shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image
                    src="/stone.jpg?height=400&width=600"
                    alt="Hot Stone Massage"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="bg-white">
                  <CardTitle className="text-emerald-800">{t("service.hotStone.title")}</CardTitle>
                  <CardDescription>{t("service.hotStone.description")}</CardDescription>
                </CardHeader>
                <CardContent className="bg-white pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">60 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 400.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">90 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 550.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">120 {t("service.duration.mins")}</span>
                      <span className="font-semibold">Rp 620.000</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 border-0"
                    onClick={() => handleBookNow(t("service.hotStone.title"))}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("service.button.book")}
                  </Button>
                </CardContent>
              </Card>

              {/* Beauty Services */}
              <Card className="overflow-hidden border-none shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image
                    src="/manicure.jpg?height=400&width=600"
                    alt="Beauty Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {t("service.badge.new")}
                  </div>
                </div>
                <CardHeader className="bg-white">
                  <CardTitle className="text-emerald-800">{t("service.beauty.title")}</CardTitle>
                  <CardDescription>{t("service.beauty.description")}</CardDescription>
                </CardHeader>
                <CardContent className="bg-white pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{t("service.manicure")}</span>
                      <span className="font-semibold">Rp 200.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{t("service.pedicure")}</span>
                      <span className="font-semibold">Rp 250.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{t("service.gelPolish")}</span>
                      <span className="font-semibold">Rp 130.000</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 border-0"
                    onClick={() => handleBookNow(t("service.beauty.title"))}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("service.button.book")}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-600"></div>
          <div className="absolute inset-0 bg-abstract-circles opacity-20"></div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white">{t("cta.title")}</h2>
              <p className="text-lg text-white/80">{t("cta.description")}</p>
              <Button
                size="lg"
                className="bg-white text-emerald-800 hover:bg-white/90 shadow-lg"
                onClick={() => handleBookNow("spa")}
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                {t("cta.button")}
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-cream-50"></div>
          <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                {t("testimonials.badge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-emerald-800 mb-4">{t("testimonials.title")}</h2>
              <p className="text-muted-foreground text-lg">{t("testimonials.description")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">S</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">Sarah L.</CardTitle>
                      <CardDescription>{t("testimonials.sarah.role")}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{t("testimonials.sarah.text")}"</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">M</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">Michael T.</CardTitle>
                      <CardDescription>{t("testimonials.michael.role")}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{t("testimonials.michael.text")}"</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">A</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">Ayu W.</CardTitle>
                      <CardDescription>{t("testimonials.ayu.role")}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{t("testimonials.ayu.text")}"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-800 to-emerald-900"></div>
        <div className="absolute inset-0 bg-leaf-pattern opacity-5"></div>
        <div className="container relative py-12 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-semibold tracking-tight">Winata Home Spa Bali</span>
              </div>
              <p className="text-emerald-100 mb-4">{t("footer.description")}</p>
              <div className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-emerald-300" />
                <span>+62 8953 8433 4630</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t("footer.businessHours")}</h3>
              <div className="space-y-2 text-emerald-100">
                <p>{t("footer.businessHours.text1")}</p>
                <p>{t("footer.businessHours.text2")}</p>
                <p className="mt-4">{t("footer.businessHours.text3")}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-800/50 mt-8 pt-8 text-center text-emerald-300 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Winata Home Spa Bali. {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="62895384334630" />
    </div>
  )
}
