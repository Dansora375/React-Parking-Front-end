import * as React from "react"

export default function SvgComponent (props){
  return(
    
    <svg
      width={130}
      height={130}
      fill="none"
      viewBox={'0 0 130 130'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M70.417 92.083a5.417 5.417 0 1 1-10.834 0 5.417 5.417 0 0 1 10.834 0Z"
        // fill="#0D7377"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65 32.5a5.417 5.417 0 0 1 5.417 5.417v32.5a5.417 5.417 0 1 1-10.834 0v-32.5A5.417 5.417 0 0 1 65 32.5Z"
        // fill="#0D7377"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65 21.667c-23.932 0-43.333 19.4-43.333 43.333s19.4 43.333 43.333 43.333c23.932 0 43.333-19.4 43.333-43.333 0-23.932-19.4-43.333-43.333-43.333ZM10.833 65c0-29.915 24.252-54.167 54.167-54.167 29.915 0 54.167 24.252 54.167 54.167 0 29.915-24.252 54.167-54.167 54.167-29.916 0-54.167-24.252-54.167-54.167Z"
        // fill="#0D7377"
      />
    </svg>
    
    )
}


