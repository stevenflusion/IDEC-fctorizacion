import React from 'react'

type Props = {
  variant?: 'boxed' | 'bleed'
  className?: string
  children: React.ReactNode
}

export default function Section({ variant = 'boxed', className = '', children }: Props) {
  if (variant === 'bleed') {
    return <section className={`w-full ${className}`}>{children}</section>
  }
  return (
    <section className={className}>
      <div className="container mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[88rem] px-4 sm:px-6 lg:px-8 xl:px-12">{children}</div>
    </section>
  )
}
