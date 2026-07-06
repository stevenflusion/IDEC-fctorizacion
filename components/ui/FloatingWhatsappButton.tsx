"use client"

import Link from "next/link"
import { getBusinessConfig } from "@/lib/business-config"

const businessConfig = getBusinessConfig()
const whatsappNumber = businessConfig.contact.whatsappNumber
const defaultMessage = encodeURIComponent(
  'Hola IDEC, necesito información sobre sus servicios de ingeniería.',
)

export default function FloatingWhatsappButton() {
  return (
    <Link
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      className="fixed bottom-6 right-6 z-[140] inline-flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
      style={{ width: 56, height: 56 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 text-white">
        <path
          fill="currentColor"
          d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.38 0 .02 5.38.02 12c0 2.11.55 4.17 1.6 6l-1.7 6 6.15-1.61A11.96 11.96 0 0 0 12 24c6.62 0 12-5.38 12-12 0-3.19-1.24-6.19-3.48-8.52Zm-8.5 18.04c-1.92 0-3.81-.51-5.47-1.48l-.39-.23-3.65.96.98-3.58-.26-.37A9.43 9.43 0 0 1 2.57 12c0-5.17 4.21-9.38 9.44-9.38 2.52 0 4.88.98 6.66 2.77a9.4 9.4 0 0 1 2.78 6.62c0 5.17-4.21 9.41-9.43 9.41Zm5.18-7.07c-.28-.15-1.65-.81-1.91-.9-.26-.1-.45-.15-.64.13-.19.28-.74.9-.91 1.07-.17.17-.33.2-.61.07-.28-.13-1.18-.44-2.25-1.41-.83-.74-1.38-1.66-1.54-1.94-.16-.28-.02-.43.12-.58.13-.13.31-.35.47-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.53-.07-.15-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.49h-.54c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.39s1.02 2.77 1.16 2.96c.14.19 2 3.06 4.83 4.29.68.3 1.21.48 1.62.62.68.22 1.3.19 1.79.11.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.06-.12-.24-.19-.52-.33Z"
        />
      </svg>
    </Link>
  )
}
