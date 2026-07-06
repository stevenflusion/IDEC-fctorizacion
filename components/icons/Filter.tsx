import type { IconProps } from './types'

export default function IconFilter({ className, size, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className || ''}
      width={size}
      height={size}
    >
      <path d="M3 5h18M6 12h12M10 19h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

