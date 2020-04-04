import React from 'react'
import FacebookLogo from './Facebook'
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
  ...props
}) => {
  const [ fb ] = networks
  return (
    <div className={`${parentClassNames || ''} text-center text-darker text-scale-0 font-400 items-center`} {...props}>
      <h1 className="text-scale-5 font-600 leading-tight">{name}</h1>
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
      <div className="my-1 mb-2 text-scale-2 narrow:text-scale-3 flex justify-center items-center">
        {phone} / {phone2}
      </div>
      <div className="flex justify-center">
        <a href={fb.url} style={{ width: 50, height: 50 }} className="text-neutral hover:text-facebook rounded-full bg-lighter flex items-center justify-center mr-1">
          <FacebookLogo style={{ width: 25, height: 25 }} className="fill-current" title={fb.text} />
        </a>
      </div>
    </div>
  )
}

export default QuickContact
