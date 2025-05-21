"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 flex items-center gap-2">
          {language === "en" ? (
            <span className="text-sm font-medium flex items-center">
              <Image src="/flags/uk.png" width={24} height={16} alt="English" className="mr-2 rounded-sm" /> EN
            </span>
          ) : (
            <span className="text-sm font-medium flex items-center">
              <Image src="/flags/id.png" width={24} height={16} alt="Indonesia" className="mr-2 rounded-sm" /> ID
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
          <Image src="/flags/uk.png" width={24} height={16} alt="English" className="mr-2 rounded-sm" /> English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("id")} className={language === "id" ? "bg-muted" : ""}>
          <Image src="/flags/id.png" width={24} height={16} alt="Indonesia" className="mr-2 rounded-sm" /> Indonesia
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
