type Props = {
  size?: number | string
  strokeWidth?: number
  className?: string
}

export function IconElectric({ size = 24, strokeWidth = 1.8, className = '' }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M13 2 4 13h6l-1 9 9-11h-6z" />
    </svg>
  )
}
