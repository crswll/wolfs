import React from 'react'
import { street, city, state, postal, hours, phone } from '../wolfs'

const QuickContact = props => {
  return (
    <div {...props}>
      <div>
        {street}, {city}, {state} {postal}
      </div>
      <ul className="list-reset flex justify-center">
        {hours.map(({ days, open, close }, index) =>
          <li key={index} className="mr-1">
            {days} {open}-{close} {index !== hours.length - 1 && '/' }
          </li>
        )}
      </ul>
      <div>
        {phone}
      </div>
    </div>
  )
}

export default QuickContact
