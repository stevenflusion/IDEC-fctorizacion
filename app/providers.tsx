'use client'

import ConfirmProvider from '@/components/ui/confirm/ConfirmProvider'
import ThemeProvider from '@/components/ui/ThemeProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ConfirmProvider>{children}</ConfirmProvider>
    </ThemeProvider>
  )
}
