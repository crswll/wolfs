import { title, hours, contact } from '../wolfs'

export default () => {
  return (
    <div itemScope itemType="http://schema.org/LocalBusiness">
      <div itemProp="name">{title}</div>
      <div>Phone: <span itemProp="telephone">{contact.phone}</span></div>

      <div itemProp="paymentAccepted" style={{ display: 'none' }}>credit card</div>
      <meta itemProp="openingHours" style={{ display: 'none' }} dateTime="Mo,Tu,We,Th,Fr,Sa,Su 11:00-22:00" />
      <div itemType="http://schema.org/GeoCoordinates" itemScope itemProp="geo">
        <meta itemProp="latitude" content="39.857610" />
        <meta itemProp="longitude" content="-75.427063" />
      </div>
      <div itemType="http://schema.org/PostalAddress" itemScope itemProp="address">
        <div itemProp="streetAddress">4417 Pennell Rd.</div>
        <div><span itemProp="addressLocality">Aston</span>, <span itemProp="addressRegion">PA</span> <span itemProp="postalCode">19014</span></div>
      </div>
    </div>

  )
}
