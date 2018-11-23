import React from 'react'

const Facebook = ({ title, ...props }) => (
  <svg viewBox="0 0 32 32" {...props}>
    <title>{title}</title>
    <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
  </svg>
)

export default Facebook