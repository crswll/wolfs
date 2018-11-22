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
  ...props,
}) => {
  return (
    <section className={classnames(parentClassNames)} aria-label={title} {...props}>
      <MenuSectionTitle
        className="-mx-2 pl-2 font-600 flex items-center"
        headerLevel={headerLevel}
      >
        <span>{title}</span>
        <a className="ml-2 block text-light p-1 bg-lighter rounded-full" href={`#menu`}>
          <Up
            className="w-25 h-25 fill-current block"
            title="Back to Top"
          />
        </a>
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
            headerLevel={headerLevel + 1}
            key={index}
            className="my-1 my-3 narrow:p-2 narrow:pb-0 narrow:-mx-2 narrow:w-1/2 narrow:my-1"
            item={item}
          />
        )}
      </ul>

      {footnotes && (
        <footer className="text-darker mt-2 pt-2">
          {footnotes}
        </footer>
      )}
    </section>
  )
}

export default MenuSection
