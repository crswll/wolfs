import React from 'react'
import classnames from 'classnames'
import { kebab } from '../helpers'
import MenuSectionTitle from './MenuSectionTitle'
import SimpleMenuItem from './SimpleMenuItem'
import Up from './Up'

const MenuSection = ({
  className: parentClassNames,
  title,
  description,
  footnotes,
  headerLevel = 1,
  items,
  children,
  ...props
}) => {
  return (
    <section className={classnames(parentClassNames)} aria-label={title} {...props}>
      <MenuSectionTitle
        className="flex items-center pl-2 -mx-2 font-600 text-darkest"
        headerLevel={headerLevel}
      >
        <span>{title}</span>
        <a className="block p-1 ml-2 rounded-full text-dark bg-lighter" href={`#menu`}>
          <Up
            style={{ width: 25, height: 25 }}
            className="block fill-current"
            title="Back to Top"
          />
        </a>
      </MenuSectionTitle>

      {description && (
        <div
          className="py-1 text-darker"
          children={description}
        />
      )}

      <ul className="list-reset narrow:flex narrow:justify-between narrow:flex-wrap">
        {items && items.map((item, index) =>
          <SimpleMenuItem
            headerLevel={headerLevel + 1}
            key={index}
            className="my-1 my-3 narrow:p-2 narrow:pb-0 narrow:-mx-2 narrow:w-1/2 narrow:my-1"
            item={item}
          />
        )}
      </ul>

      {footnotes && (
        <footer className="pt-2 mt-2 text-darker">
          {footnotes}
        </footer>
      )}
    </section>
  )
}

export default MenuSection
