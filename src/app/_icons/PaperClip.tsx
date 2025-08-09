import * as React from "react"
import { SVGProps } from "react"
const PaperClip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" {...props}>
    <defs>
      <linearGradient id="clipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
        <stop offset="50%" stopColor="#b4c8f8" /> {/* blue-500 */}
        <stop offset="90%" stopColor="#aac5f3" /> {/* red-500 */}
      </linearGradient>
    </defs>

    <path
    fill="url(#clipGradient)"
    d="M288.6 76.8c56.2-56.2 147.4-56.2 203.6 0 56.2 56.2 56.2 147.4 0 203.6l-164 164c-34.4 34.4-90.1 34.4-124.5 0-34.4-34.4-34.4-90.1 0-124.5l152.8-152.6c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L249 365.3c-9.4 9.4-9.4 24.6 0 33.9 9.4 9.3 24.6 9.4 33.9 0l164-164c31.2-31.2 31.2-81.9 0-113.1-31.2-31.2-81.9-31.2-113.1 0l-164 164c-53.1 53.1-53.1 139.2 0 192.3 53.1 53.1 139.2 53.1 192.3 0l130.2-130.1c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-130.2 130c-78.1 78.1-204.7 78.1-282.8 0-78.1-78.1-78.1-204.7 0-282.8l164-164z" />
  </svg>
)
export default PaperClip
