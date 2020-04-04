import React from 'react'
import classnames from 'classnames'

const MenuSectionTitle = ({
  className: parentClassNames,
  headerLevel = 2,
  ...props
}) => {
  const HeaderElement = `h${headerLevel}`

  return (
    <HeaderElement
      className={classnames(parentClassNames, 'text-scale-3')}
      {...props}
    />
  )
}

export default MenuSectionTitle
