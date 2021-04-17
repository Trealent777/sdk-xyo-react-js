/* eslint-disable import/no-cycle */
import AdministrativeArea from './AdministrativeArea'
import AggregateRating from './AggrigateRating'
import CreativeWork from './CreativeWork'
import DateTime from './DateTime'
import GeoShape from './GeoShape'
import Intangible from './Intangible'
import ItemAvailability from './ItemAvailability'
import Organization from './Organization'
import Person from './Person'
import Place from './Place'
import Product from './Product'
import QuantitativeValue from './QuantitativeValue'
import Review from './Review'
import Service from './Service'
import Text from './Text'
import Thing from './Thing'
import Time from './Time'
import URL from './URL'

//TODO: Resolve Anys
interface Offer extends Intangible {
  acceptedPaymentMethod?: any
  addOn?: Offer
  advanceBookingRequirement?: QuantitativeValue
  aggrigateRating?: AggregateRating
  areaServed?: AdministrativeArea | GeoShape | Place | Text
  availability?: ItemAvailability
  availabilityAtOrFrom?: Place
  availabilityEnds?: DateTime | Time
  availabilityStarts?: DateTime | Time
  availableDeliveryMethod?: any
  businessFunction?: any
  category?: any | Text | Thing | URL
  deliveryLeadTime?: QuantitativeValue
  eligibleCustomerType?: any
  eligibleDuration?: QuantitativeValue
  eligibleQuantity?: QuantitativeValue
  eligibleRegion?: GeoShape | Place | Text
  eligibleTransactionVolume?: any
  gtin?: Text
  gtin12?: Text
  gtin13?: Text
  gtin14?: Text
  gtin8?: Text
  includesObject?: any
  ineligibleRegion?: GeoShape | Place | Text
  inventoryLevel?: QuantitativeValue
  itemCondition?: any
  itemOffered?: any | CreativeWork | Event | any | Product | Service | any
  leaseLength?: any | QuantitativeValue
  mpn?: Text
  offeredBy?: Organization | Person
  price?: number | Text
  priceCurrency?: Text
  priceSpecification?: any
  priceValidUntil?: DateTime
  review?: Review
  seller?: Organization | Person
  serialNumber?: Text
  shippingDetails?: any
  sku?: Text
  validFrom?: DateTime
  validThrough?: DateTime
  warranty?: any
}

export default Offer
