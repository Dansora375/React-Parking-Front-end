import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={35}
      height={35}
      aria-hidden="true"
      data-prefix="fas"
      data-icon="ellipsis-vertical"
      className="prefix__svg-inline--fa prefix__fa-ellipsis-vertical"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 512"
      {...props}
    >
      <path
        fill="#14FFEC"
        d="M128 64c0-35.39-28.62-64-64-64S0 28.61 0 64s28.62 64 64 64 64-28.61 64-64zm0 192c0-35.39-28.62-64-64-64S0 220.6 0 256s28.62 64 64 64 64-28.6 64-64zm0 192c0-35.39-28.62-64-64-64S0 412.61 0 448s28.62 64 64 64 64-28.6 64-64z"
      />
    </svg>
  )
}

export default SvgComponent
