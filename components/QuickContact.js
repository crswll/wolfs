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
      <ul className="my-1 list-reset" aria-label="Shop Hours">
        {hours.map(({ days, open, close }, index) =>
          <li key={index} className="inline mr-1">
            {days} {open}-{close} {index !== hours.length - 1 && '/' }
          </li>
        )}
      </ul>
      <a href="https://goo.gl/maps/ydwfdbwVzCa3TkfbA" className="border-b border-lighter hover:border-light focus:border-light">
        {street}, {city}, {state} {postal}
      </a>
      <div className="flex items-center justify-center mt-1 text-scale-1 narrow:text-scale-3">
        <a className="mr-1 border-b border-lighter hover:border-light focus:border-light" href={`tel:${phone}`}>{phone}</a>/<a className="ml-1 border-b border-lighter hover:border-light focus:border-light" href={`tel:${phone2}`}>{phone2}</a>
      </div>
    </div>
  )
}

export default QuickContact
