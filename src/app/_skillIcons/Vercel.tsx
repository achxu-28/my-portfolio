import * as React from "react"
import { SVGProps } from "react"
const Vercel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m7.5 1-.577 1.003L1.175 12 .6 13h13.8l-.575-1-5.748-9.997L7.5 1Zm0 2.006L2.329 12H12.67L7.5 3.006Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Vercel
