import React from 'react'
import MenuButtonIcon from './MenuButtonIcon'

const MenuButton = ({
  className: parentClassNames,
  onClick,
  ...props
}) => {
  return (
    <button
      className="fixed pin-t pin-r text-darkest p-2 bg-lightest"
      onClick={onClick}
      {...props}
    >
      <MenuButtonIcon className="fill-current block w-20 h-20" />
    </button>
  )
}

export default MenuButton
