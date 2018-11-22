import React from 'react'

const Up = ({ title, ...props }) => (
  <svg viewBox="0 0 48 48" {...props}>
    {title && (
      <title>{title}</title>
    )}
    <path d="M37.4 28.6l-12-12c-.8-.8-2-.8-2.8 0l-12 12c-.8.8-.8 2 0 2.8s2 .8 2.8 0L24 20.8l10.6 10.6c.4.4 1 .6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8z" />
  </svg>
)

export default Up
