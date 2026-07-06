"use client"

import { ReactNode, useEffect, useState } from 'react'

type Props = {
  children: (session: ClientSession) => ReactNode
  fallback?: ReactNode
}

type ClientSession = {
  role: string | null
  name: string | null
  email: string | null
}

export default function ClientSessionGate({ children, fallback = null }: Props) {
  const [session, setSession] = useState<ClientSession | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    fetch('/auth/api/me', { credentials: 'include', cache: 'no-store' })
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        if (!data) return
        setSession({
          role: data.role ?? null,
          name: data.name ?? null,
          email: data.email ?? null,
        })
      })
      .finally(() => setReady(true))
  }, [])

  if (!ready) return fallback ?? null
  if (!session) return fallback ?? null

  return <>{children(session)}</>
}
