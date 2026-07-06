import type { IconProps } from './types'

export default function IconArrowRight({ className, size, strokeWidth = 1.5 }: IconProps) {
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-7 7 7-7 7" />
    </svg>
  )
}
