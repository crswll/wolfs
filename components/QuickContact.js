import React from 'react'
import FacebookLogo from './Facebook'
import TwitterLogo from './Twitter'
import {
  city,
  hours,
  name,
  networks,
  phone,
  phone2,
  postal,
  state,
  street,
} from '../wolfs'

const QuickContact = ({
  className: parentClassNames,
  ...props,
}) => {
  const [ fb, twitter ] = networks
  return (
    <div className={`${parentClassNames || ''} text-center text-darker text-scale-0 font-400 items-center`} {...props}>
      <h1 className="text-scale-5 font-600 leading-tight">{name}</h1>
      <address className="roman">
        <a
          className="no-underline text-darker"
          href="https://goo.gl/maps/kS6ZHfA4S6k"
        >
          {street}, {city}, {state} {postal}
        </a>
      </address>
      <ul className="list-reset wide:mx-2" aria-label="Shop Hours">
        {hours.map(({ days, open, close }, index) =>
          <li key={index} className="inline mr-1">
            {days} {open}-{close} {index !== hours.length - 1 && '/' }
          </li>
        )}
      </ul>
      <div className="my-1 mb-2 text-scale-2 narrow:text-scale-3 flex justify-center items-center">
        <a className="text-darker no-underline" href={`tel:${phone}`}>{phone}</a>
        <span className="mx-1">/</span>
        <a className="text-darker no-underline" href={`tel:${phone2}`}>{phone2}</a>
      </div>
      <div className="flex justify-center">
        <a href={fb.url} className="text-neutral hover:text-facebook rounded-full bg-lighter w-50 h-50 flex items-center justify-center mr-1">
          <FacebookLogo className="w-25 h-25 fill-current" title={fb.text} />
        </a>
      </div>
    </div>
  )
}

export default QuickContact
