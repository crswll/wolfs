import React from 'react'
import { street, city, state, postal, hours, phone } from '../wolfs'

const QuickContact = ({
  className: parentClassNames,
  ...props,
}) => {
  return (
    <div className={`${parentClassNames || ''} flex flex-col wide:flex-row justify-center text-center text-darker text-scale-1 font-400 items-center`} {...props}>
      <div>
        {street}, {city}, {state} {postal}
      </div>
      <ul className="list-reset wide:mx-2">
        {hours.map(({ days, open, close }, index) =>
          <li key={index} className="inline mr-1">
            {days} {open}-{close} {index !== hours.length - 1 && '/' }
          </li>
        )}
      </ul>
      <div className="mt-2 text-scale-3 narrow:text-scale-1 wide:mt-0 font-600">
        {phone}
      </div>
    </div>
  )
}

export default QuickContact
