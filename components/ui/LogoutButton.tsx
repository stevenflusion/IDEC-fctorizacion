"use client"
import { useRouter } from 'next/navigation'

type Props = {
  redirectTo?: string
  className?: string
}

export default function LogoutButton({ redirectTo = '/login', className }: Props) {
  const router = useRouter()
  async function onClick() {
    await fetch('/auth/logout', { method: 'POST' })
    router.replace(redirectTo)
  }
  return (
    <button onClick={onClick} className={className ?? "text-sm font-medium text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary"}>
      Salir
    </button>
  )
}
