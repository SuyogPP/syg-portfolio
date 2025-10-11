"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

type ThemeName = "light" | "dark" 

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const order: ThemeName[] = ["light", "dark"]
  const currentTheme = (theme as ThemeName) || "system"
  const nextTheme = order[(order.indexOf(currentTheme) + 1) % order.length]

  const handleClick = () => setTheme(nextTheme)

  const icon = currentTheme === "dark" ? "moon" : currentTheme === "light" ? "sun-alt" : "monitor"
  const label = currentTheme === "dark" ? "Dark" : currentTheme === "light" ? "Light" : "System"

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      aria-label={`Theme: ${label}. Click to switch to ${nextTheme}.`}
      title={`Theme: ${label}. Click to switch to ${nextTheme}.`}
    >
      {/* Render a stable icon pre-mount to avoid hydration mismatch */}
      {mounted ? <Icon icon={`pixelarticons:${icon}`} className="h-[1.5rem] w-[1.5rem]" /> : <Monitor className="h-[1.5rem] w-[1.5rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
