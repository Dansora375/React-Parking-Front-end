import * as React from "react"

function EntradasComponent(props) {
  return (
    <svg
      width={80}
      height={80}
      fill="none"
      stroke="#000000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M60 32.5H10L15 21c1.5-3.5 5-6 9-6h21.75c4 0 7.5 2.5 9.25 6l5 11.5zM20 57.5H5v5c0 2.75 2.25 5 5 5h5c2.75 0 5-2.25 5-5v-5zM2.5 30H11M60 30h7.5M10 45h7.5M60 75c9.665 0 17.5-7.835 17.5-17.5S69.665 40 60 40s-17.5 7.835-17.5 17.5S50.335 75 60 75z"
        // stroke="#BCFFFA" 
        strokeOpacity={0.98}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 40v17.5h17.5M44 50.25c-.75-1.75-2.5-2.75-4.5-2.75h-8.75c-2 0-3.75 1-4.5 2.75L22.5 57.5"
        // stroke=""
        strokeOpacity={0.98}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.5 57.5h-35c-2.75 0-5-2.25-5-5v-10c0-5.5 4.5-10 10-10h45c5.25 0 9.5 4 10 9.25"
        // stroke="#BCFFFA"
        strokeOpacity={0.98}
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default EntradasComponent
