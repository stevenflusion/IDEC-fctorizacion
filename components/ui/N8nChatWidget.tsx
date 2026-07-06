"use client"

import { useEffect } from "react"
import "@n8n/chat/style.css"
import "@/app/n8n-chat-theme.css"
import { createChat } from "@n8n/chat"

export default function N8nChatWidget() {
  useEffect(() => {
    const webhookUrl =
      process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL || ""

    if (!webhookUrl) {
      return
    }

    createChat({
      webhookUrl,
      mode: "window",
      defaultLanguage: "en",
      initialMessages: [
        "¡Hola! 👋",
        "Soy el asistente virtual de IDEC. Cuéntame, ¿en qué puedo ayudarte hoy?",
      ],
      i18n: {
        en: {
          title: "Asistente IDEC 💬",
          subtitle:
            "Consulta sobre nuestros servicios de ingeniería, automatización y tecnología.",
          footer: "",
          getStarted: "Nueva conversación",
          inputPlaceholder: "Escribe tu mensaje...",
          closeButtonTooltip: "Cerrar chat",
        },
      },
      showWelcomeScreen: true,
    })
  }, [])

  return null
}
