type Props = {
  size?: number | string
  strokeWidth?: number
  className?: string
}

export function IconMechanical({ size = 24, strokeWidth = 1.6, className = '' }: Props) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1.82l.02.08a2 2 0 1 1-3.38 0l.02-.08A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.82-.33l-.08.02a2 2 0 1 1 0-3.38l.08.02A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.6-1 .65.65 0 0 0-.06-.06 2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 .33-1.82l-.02-.08a2 2 0 1 1 3.38 0l-.02.08A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1-.6l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.6 1 1.65 1.65 0 0 0 .6 1 1.65 1.65 0 0 0 1.82.33l.08-.02a2 2 0 1 1 0 3.38l-.08-.02A1.65 1.65 0 0 0 19.4 15Z" />
    </svg>
  )
}
