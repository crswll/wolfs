import React from 'react'
import classnames from 'classnames'
import { toUSD } from '../helpers'
import MenuSectionTitle from './MenuSectionTitle'
import SimpleMenuItem from './SimpleMenuItem'

const MenuSection = ({
  className: parentClassNames,
  title,
  description,
  footnotes,
  headerLevel = 1,
  items,
  children,
  ...props,
}) => {
  return (
    <div className={classnames(parentClassNames, 'py-2 px-3 mt-2')}>
      <MenuSectionTitle
        className="-mx-2 pl-2 font-600"
        headerLevel={headerLevel}
      >
        {title}
      </MenuSectionTitle>

      {description && (
        <div
          className="text-darker py-1"
          children={description}
        />
      )}

      <ul className="list-reset narrow:flex narrow:justify-between narrow:flex-wrap">
        {items && items.map((item, index) =>
          <SimpleMenuItem
            key={index}
            className="my-1 mb-3 narrow:p-2 narrow:pb-0 narrow:-mx-2 narrow:w-1/2 narrow:mb-0"
            item={item}
          />
        )}
      </ul>

      {footnotes && (
        <footer className="text-darker border-t-1 border-lighter mt-2 pt-2">
          {footnotes}
        </footer>
      )}
    </div>
  )
}

export default MenuSection
