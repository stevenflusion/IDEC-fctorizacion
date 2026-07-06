"use client"

import { useConfirm } from "./confirm/ConfirmProvider"
import { useRef } from "react"

type Props = {
  action: (formData: FormData) => Promise<void> | void
  confirmMessage: string
  children: React.ReactNode
  className?: string
  title?: string
  confirmText?: string
  cancelText?: string
  tone?: 'primary' | 'danger'
}

export default function ConfirmForm({ action, confirmMessage, children, className, title = 'Confirmar', confirmText = 'Sí, continuar', cancelText = 'Cancelar', tone = 'primary' }: Props) {
  const confirm = useConfirm()
  const confirmedRef = useRef(false)

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    // If already confirmed, allow submission without blocking
    if (confirmedRef.current) {
      confirmedRef.current = false
      return
    }
    // Capture the form element before awaiting
    const form = e.currentTarget as HTMLFormElement
    // Block default submission until user confirms
    e.preventDefault()
    const ok = await confirm({
      title,
      description: confirmMessage,
      confirmText,
      cancelText,
      tone,
    })
    if (ok) {
      confirmedRef.current = true
      // Re-trigger submission programmatically using the captured reference
      form.requestSubmit()
    }
  }

  return (
    <form className={className} action={action} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
