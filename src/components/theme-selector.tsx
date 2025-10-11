"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

type ThemeName = "light" | "dark" | "system"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const order: ThemeName[] = ["light", "dark", "system"]
  const currentTheme = (theme as ThemeName) || "system"
  const nextTheme = order[(order.indexOf(currentTheme) + 1) % order.length]

  const handleClick = () => setTheme(nextTheme)

  const Icon = currentTheme === "dark" ? Moon : currentTheme === "light" ? Sun : Monitor
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
      {mounted ? <Icon className="h-[1.2rem] w-[1.2rem]" /> : <Monitor className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
