import * as React from "react"

export default function SvgComponent(props) {
  return (
    <svg
      width={100}
      height={100}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M56.25 21.875h12.5L84.375 68.75M38 47h-9.778L16 70"
        stroke="#14FFEC"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M84.375 81.25c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5zM15.625 81.25c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5zM15.625 43.75c13.75 0 25 11.25 25 25h18.75c0-13.75 11.25-25 25-25 2.5 0 5.313.313 7.5 1.25"
        stroke="#14FFEC"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M71.875 34.375h-18.75l-1.25 1.875c-5 8.125-14.375 12.5-23.75 10.625"
        stroke="#14FFEC"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


