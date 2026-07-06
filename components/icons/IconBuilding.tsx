type Props = {
  size?: number | string
  strokeWidth?: number
  className?: string
}

export function IconBuilding({ size = 24, className = '' }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3 21h18v-2H3v2zM5 18h2v-4H5v4zm4 0h2v-4H9v4zm4 0h2v-4h-2v4zm4 0h2v-4h-2v4zM5 12h2V8H5v4zm4 0h2V8H9v4zm4 0h2V8h-2v4zm4 0h2V8h-2v4zM3 6l9-4 9 4v2H3V6z" />
    </svg>
  )
}