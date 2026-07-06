"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function GlobalLinks() {
  const pathname = usePathname()
  const base = "text-sm whitespace-nowrap transition-colors"
  const inactive = "text-gray-800 dark:text-gray-200 hover:text-primary"
  const active = "text-blue-600 font-semibold"

  return (
    <div className="ml-auto flex items-center gap-4">
      <Link href="/home" className={`${base} ${pathname === '/home' ? active : inactive}`}>
        Inicio
      </Link>
    </div>
  )
}
