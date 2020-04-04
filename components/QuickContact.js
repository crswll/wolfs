import React from 'react'
import {
  city,
  hours,
  name,
  phone,
  phone2,
  postal,
  state,
  street,
} from '../wolfs'

const QuickContact = ({
  className: parentClassNames,
  ...props
}) => {
  return (
    <div className={`${parentClassNames || ''} text-center text-darker text-scale-0 font-400 items-center`} {...props}>
      <h1 className="mb-1 leading-tight text-scale-5 text-darkest font-600">{name}</h1>
      <div>
        {street}, {city}, {state} {postal}
      </div>
      <ul className="list-reset wide:mx-2" aria-label="Shop Hours">
        {hours.map(({ days, open, close }, index) =>
          <li key={index} className="inline mr-1">
            {days} {open}-{close} {index !== hours.length - 1 && '/' }
          </li>
        )}
      </ul>
      <div className="flex items-center justify-center mt-1 text-scale-2 narrow:text-scale-3">
        {phone} / {phone2}
      </div>
    </div>
  )
}

export default QuickContact
