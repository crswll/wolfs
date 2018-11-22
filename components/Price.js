import React from 'react'
import { toUSD } from '../helpers'

function getType (value) {
  let type = typeof value;
  if (type === 'object') {
    return value
      ? Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
      : 'null';
  }
  return type;
}

const single = price => <span className="text-primary-darker font-600">{toUSD(price)}</span>

const multiple = pricing => (
  <ul className="list-reset flex flex-col text-scale-1" aria-label="Pricing">
    {pricing.map(({ label, price }) =>
      <li key={label} className="mr-1">
        {single(price)} <span className="text-neutral">{label}</span>
      </li>
    )}
  </ul>
)

const literal = price => <span className="text-primary-darker font-600">{price}</span>


const switchPriceRender = price => {
  switch (getType(price)) {
    case "number":
      return single(price)
    case "array":
      return multiple(price)
    default:
      return literal(price)
  }
}

const Price = ({
  className: parentClassNames,
  price,
  ...props
}) => {
  return (
    <div className={`${parentClassNames || ''}`} {...props}>
      {switchPriceRender(price)}
    </div>
  )
}

export default Price
