"use client"

import { useEffect } from "react"

const themeStorageKey = "idec-site-theme"

const isSiteTheme = (value: string | null): value is "light" | "dark" =>
  value === "light" || value === "dark"

const applyTheme = (theme: "light" | "dark") => {
  document.documentElement.dataset.siteTheme = theme
  document.documentElement.classList.toggle("dark", theme === "dark")
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const storedTheme = window.localStorage.getItem(themeStorageKey)
    applyTheme(isSiteTheme(storedTheme) ? storedTheme : "light")

    const handleThemeChange = (event: Event) => {
      const nextTheme = (event as CustomEvent<"light" | "dark">).detail

      if (isSiteTheme(nextTheme)) {
        applyTheme(nextTheme)
      }
    }

    window.addEventListener("idec-theme-change", handleThemeChange)

    return () => {
      window.removeEventListener("idec-theme-change", handleThemeChange)
    }
  }, [])

  return children
}

export { applyTheme, themeStorageKey, isSiteTheme }
