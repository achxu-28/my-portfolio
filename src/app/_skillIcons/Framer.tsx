import * as React from "react"
import { SVGProps } from "react"
const Framer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="none" d="M0 0h48v48H0z" />
    <path d="M9.3 2h29.4v14.7H24Zm0 14.7H24l14.7 14.6H9.3Zm0 14.6H24V46Z" />
  </svg>
)
export default Framer
