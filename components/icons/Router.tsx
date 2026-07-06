import type { IconProps } from './types'

export default function IconRouter({ className, size, strokeWidth = 1.5 }: IconProps) {
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
      <rect x="4" y="12" width="16" height="6" rx="1"/>
      <path d="M7 10c1.5-1.5 3.5-1.5 5 0m-7-2c3-3 7-3 10 0" strokeLinecap="round"/>
    </svg>
  )
}
