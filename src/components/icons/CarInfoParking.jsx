import * as React from "react"

export default function SvgComponent(props) {
  return (
    <svg
      width={125}
      height={139}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_67_318)"
        stroke="#14FFEC"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M31.25 98.477c6.213 0 11.25-5.037 11.25-11.25 0-6.214-5.037-11.25-11.25-11.25S20 81.013 20 87.227c0 6.213 5.037 11.25 11.25 11.25zM91.25 98.477c6.213 0 11.25-5.037 11.25-11.25 0-6.214-5.037-11.25-11.25-11.25S80 81.013 80 87.227c0 6.213 5.037 11.25 11.25 11.25zM110 72.227h7.5M20 60.977h75M53.75 38.477l-11.25 22.5" />
        <path d="M102.5 87.227h15c2.25 0 3.75-1.5 3.75-3.75v-7.5c0-8.25-6.75-15-15-15H95l-14.25-17.25c-3-3.375-7.125-5.25-11.625-5.25h-28.5c-5.625 0-10.875 3.375-13.5 8.25L20 60.977h-3.75c-4.125 0-7.5 3.375-7.5 7.5v15c0 2.25 1.5 3.75 3.75 3.75H20M42.5 87.227H80" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_67_318">
          <path
            fill="#fff"
            transform="translate(0 .977)"
            d="M0 0h125v137.695H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}


