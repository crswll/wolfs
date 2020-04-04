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
      <HeaderTag className="flex items-baseline text-scale-2 text-darker">
        <span className="block mb-1 mr-1 font-600" children={name} />
        {tags && (
          <div className="ml-1">
            {tags.map(tag =>
              <abbr
                key={tag}
                className={classnames('text-scale-n1 text-dark bg-lighter mr-1 px-1 rounded-sm', {
                  'bg-veg-light text-veg-dark': tag === 'VEG'
                })}
                style={{ textDecoration: 'none' }}
                children={tag}
                title={tagNames[tag]}
              />
            )}
          </div>
        )}
      </HeaderTag>
      <Price className="text-scale-1" price={price} />
      {description &&
        <p className="mt-1 font-sans text-darker">
          {description}
        </p>
      }
    </li>
  )
}

export default SimpleMenuItem
