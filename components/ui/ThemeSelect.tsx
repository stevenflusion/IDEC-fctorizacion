"use client"

import { useEffect, useId, useState } from "react"

import {
  applyTheme,
  isSiteTheme,
  themeStorageKey,
} from "@/components/ui/ThemeProvider"

export default function ThemeSelect({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const groupName = useId()

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(themeStorageKey)
    const initialTheme = isSiteTheme(storedTheme) ? storedTheme : "light"

    setTheme(initialTheme)
    applyTheme(initialTheme)

    const handleThemeChange = (event: Event) => {
      const nextTheme = (event as CustomEvent).detail

      if (isSiteTheme(nextTheme)) {
        setTheme(nextTheme)
      }
    }

    window.addEventListener("idec-theme-change", handleThemeChange)

    return () => {
      window.removeEventListener("idec-theme-change", handleThemeChange)
    }
  }, [])

  const handleChange = (value: "light" | "dark") => {
    setTheme(value)
    window.localStorage.setItem(themeStorageKey, value)
    window.dispatchEvent(new CustomEvent("idec-theme-change", { detail: value }))
    applyTheme(value)
  }

  const options: { value: "light" | "dark"; label: string }[] = [
    { value: "light", label: "Claro" },
    { value: "dark", label: "Oscuro" },
  ]

  return (
    <fieldset
      className={`theme-select ${compact ? "theme-select--compact" : ""}`}
      aria-label="Tema visual"
    >
      <legend className="sr-only">Tema visual</legend>
      {options.map((option) => {
        const isActive = theme === option.value

        return (
          <label
            key={option.value}
            className={`theme-select-option ${
              isActive ? "theme-select-option--active" : ""
            }`}
          >
            <input
              className="theme-select-input"
              type="radio"
              name={groupName}
              value={option.value}
              checked={isActive}
              onChange={() => handleChange(option.value)}
            />
            <span className="theme-select-dot" aria-hidden="true" />
            <span className="theme-select-label">{option.label}</span>
          </label>
        )
      })}
    </fieldset>
  )
}
