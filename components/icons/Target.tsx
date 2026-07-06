import type { IconProps } from "./types";

export default function IconTarget({
  className,
  size,
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth={strokeWidth}
      className={className || ""}
      width={size}
      height={size}
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
