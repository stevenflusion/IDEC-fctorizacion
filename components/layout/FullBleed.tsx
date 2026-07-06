import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

// Breaks out of boxed containers to span full viewport width
export default function FullBleed({ className = '', children }: Props) {
  return (
    <div className={`mx-[calc(50%-50vw)] w-screen ${className}`}>{children}</div>
  )
}

