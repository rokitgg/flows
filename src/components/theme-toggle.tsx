"use client"

import { Check, ChevronRight } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="lg" className="font-medium justify-between text-primary-background">
            Color Theme
            <ChevronRight className="w-5 h-5 text-primary-background" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" sideOffset={10} align="start" avoidCollisions>
        <DropdownMenuItem onClick={() => setTheme("light")} className="justify-between">
          Light
          <Check className={`${theme === "light" ? "opacity-100 text-primary w-4 h-4" : "opacity-0"}`} />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="justify-between">
          Dark
          <Check className={`${theme === "dark" ? "opacity-100 text-primary w-4 h-4" : "opacity-0"}`} />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="justify-between">
          Auto
          <Check className={`${theme === "system" ? "opacity-100 text-primary w-4 h-4" : "opacity-0"}`} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
