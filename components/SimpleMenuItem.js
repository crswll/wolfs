import React from 'react'
import classnames from 'classnames'
import Price from './Price'
import { tagNames } from '../wolfs'

const SimpleMenuItem = ({
  className: parentClassNames,
  item,
  headerLevel = 3,
}) => {
  const { name, description, price, tags } = item
  const HeaderTag = `h${headerLevel}`

  return (
    <li className={classnames(parentClassNames)}>
      <HeaderTag className="text-scale-2 flex items-baseline text-dark">
        <span className="mr-1 mb-1 block font-600" children={name} />
        {tags && (
          <div className="ml-1">
            {tags.map(tag =>
              <abbr
                key={tag}
                className="text-scale-n1 text-dark bg-lighter mr-1 px-1 rounded-sm"
                style={{ textDecoration: 'none' }}
                data-tag={tag}
                children={tag}
                title={tagNames[tag]}
              />
            )}
          </div>
        )}
      </HeaderTag>
      <Price className="text-scale-1" price={price} />
      {description &&
        <p className="mt-1 text-darker font-sans">
          {description}
        </p>
      }
    </li>
  )
}

export default SimpleMenuItem
