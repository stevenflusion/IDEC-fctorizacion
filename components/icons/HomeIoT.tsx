import type { IconProps } from './types'

export default function IconHomeIoT({ className, size, strokeWidth = 1.5 }: IconProps) {
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
      <path d="M3 11l9-7 9 7v8a2 2 0 0 1-2 2h-2v-6H7v6H5a2 2 0 0 1-2-2v-8z"/>
      <path d="M9 14c1.333-1.333 4.667-1.333 6 0" strokeLinecap="round"/>
    </svg>
  )
}
