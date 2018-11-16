import Header from '../components/Header'
import Address from '../components/Address'
import { title, menu } from '../wolfs'
import "../base.css"

const toUSD = n => n.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default () => (
  <div className="select-none font-serif border-t-8 border-primary leading-normal">
    <Header title={title} className="mb-3"/>
    {menu.map(({ name, description, price }) =>
      <div key={name} className="mb-2">
        <h2 className="text-primary mb-1">{name}</h2>
        <p>{description}</p>
        <p>{toUSD(price)}</p>
      </div>
    )}
    <Address />
  </div>
)
