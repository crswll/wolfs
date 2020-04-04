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
  ...props
}) => {
  const [ fb, twitter ] = networks
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
        <a href={fb.url} className="text-neutral hover:text-facebook rounded-full bg-lighter w-50 h-50 flex items-center justify-center mr-1">
          <FacebookLogo className="w-25 h-25 fill-current" title={fb.text} />
        </a>
        <a href={twitter.url} className="text-neutral hover:text-twitter rounded-full bg-lighter w-50 h-50 flex items-center justify-center">
          <TwitterLogo className="w-25 h-25 fill-current" title={twitter.text} />
        </a>
      </div>
    </div>
  )
}

export default QuickContact
