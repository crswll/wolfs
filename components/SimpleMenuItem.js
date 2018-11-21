import React from 'react'
import classnames from 'classnames'
import { toUSD } from '../helpers'

const SimpleMenuItem = ({
  className: parentClassNames,
  item,
  headerLevel = 3,
  ...props,
}) => {
  const { name, description, price } = item
  const HeaderTag = `h${headerLevel}`

  return (
    <div className={classnames(parentClassNames)}>
      <HeaderTag className="text-scale-2 mb-1 flex justify-between">
        <span className="mr-1">{name}</span>
        <span className="text-darkest">{toUSD(price)}</span>
      </HeaderTag>
      {description &&
        <p className="mb-1 text-darker font-sans">
          {description}
        </p>
      }
    </div>
  )
}

export default SimpleMenuItem
