import React from 'react'
import classnames from 'classnames'
import { tagNames } from '../wolfs'
import { toUSD } from '../helpers'

const SimpleMenuItem = ({
  className: parentClassNames,
  item,
  headerLevel = 3,
  ...props,
}) => {
  const { name, description, price, tags } = item
  const HeaderTag = `h${headerLevel}`

  return (
    <div className={classnames(parentClassNames)}>
      <HeaderTag className="text-scale-2 font-500 mb-1 flex justify-between">
        <span className="mr-1">
          {name}
          {tags && (
            tags.map(tag =>
              <span
                key={tag}
                className="text-scale-n1 text-darker bg-lighter border-lighter mx-1 p-1 rounded-sm"
                children={tag}
                title={tagNames[tag]}
              />
            )
          )}
        </span>
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
