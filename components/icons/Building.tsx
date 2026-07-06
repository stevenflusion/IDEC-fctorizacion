import type { IconProps } from './types'

export default function IconBuilding({ className, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || ''}
      width={size}
      height={size}
    >
      <path d="M3 4h8v16H3zM13 9h8v11h-8z"/>
      <path fillRule="evenodd" d="M7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2zM17 12h2v2h-2v-2zm0 4h2v2h-2v-2z" clipRule="evenodd"/>
    </svg>
  )
}
