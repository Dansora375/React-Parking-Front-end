import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={80}
      height={80}
      fill="none"
      stroke="#BCFFFA"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 65a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM57.5 65a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM70 47.5h5M10 40h50M32.5 25L25 40"
        // stroke="#BCFFFA"
        strokeOpacity={0.98}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65 57.5h10c1.5 0 2.5-1 2.5-2.5v-5c0-5.5-4.5-10-10-10H60l-9.5-11.5c-2-2.25-4.75-3.5-7.75-3.5h-19c-3.75 0-7.25 2.25-9 5.5L10 40H7.5c-2.75 0-5 2.25-5 5v10c0 1.5 1 2.5 2.5 2.5h5M25 57.5h25"
        
        strokeOpacity={0.98}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgComponent
