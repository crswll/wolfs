import React from 'react'

const MenuButtonIcon = ({ title, ...props }) => (
  <svg width={18} height={12} viewBox="0 0 18 12" {...props}>
    { title && <title>{title}</title> }
    <path d="M0 0h18v2H0zM0 5h18v2H0zM0 10h18v2H0z" />
  </svg>
)

export default MenuButtonIcon
