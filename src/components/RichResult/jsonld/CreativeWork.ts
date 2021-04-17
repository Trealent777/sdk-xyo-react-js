/* eslint-disable import/no-cycle */
import AggregateRating from './AggrigateRating'
import DateTime from './DateTime'
import Integer from './Integer'
import Language from './Language'
import MediaObject from './MediaObject'
import Offer from './Offer'
import Organization from './Organization'
import Person from './Person'
import Place from './Place'
import Product from './Product'
import QuantitativeValue from './QuantitativeValue'
import Rating from './Rating'
import Review from './Review'
import Text from './Text'
import Thing from './Thing'
import URL from './URL'

//TODO: Resolve Anys
interface CreativeWork extends Thing {
  about?: Thing
  abstract?: Text
  accessMode?: Text
  accessModeSufficient?: any
  accessibilityAPI?: Text
  accessibilityControl?: Text
  accessibilityFeature?: Text
  accessibilityHazard?: Text
  accessibilitySummary?: Text
  accountablePerson?: Person
  acquireLicensePage?: CreativeWork | URL
  aggregateRating?: AggregateRating
  alternativeHeading?: Text
  assesses?: any | Text
  associatedMedia?: MediaObject
  audience?: any
  audio?: any | any | any
  author?: Organization | Person
  award?: Text
  character?: Person
  citation?: CreativeWork | Text
  comment?: any
  commentCount?: Integer
  conditionsOfAccess?: Text
  contentLocation?: Place
  contentRating?: Rating | Text
  contentReferenceTime?: DateTime
  contributor?: Organization | Person
  copyrightHolder?: Organization | Person
  copyrightNotice?: Text
  copyrightYear?: number
  correction?: any | Text | URL
  creativeWorkStatus?: any | Text
  creator?: Organization | Person
  creditText?: Text
  dateCreated?: DateTime
  dateModified?: DateTime
  datePublished?: DateTime
  discussionUrl?: URL
  editEIDR?: Text | URL
  editor?: Person
  educationalAlignment?: any
  educationalLevel?: any | Text | URL
  educationalUse?: any | Text
  encoding?: MediaObject
  encodingFormat?: Text | URL
  exampleOfWork?: CreativeWork
  expires?: DateTime
  funder?: Organization | Person
  genre?: Text | URL
  hasPart?: CreativeWork
  headline?: Text
  inLanguage?: Language | Text
  interactionStatistic?: any
  interactiveityType?: Text
  isAccessibleForFree?: boolean
  isBasedOn?: CreativeWork | Product | URL
  isFamilyFriendly?: boolean
  isPartOf?: CreativeWork | URL
  keywords?: any | Text | URL
  learningResourceType?: any | Text
  license?: CreativeWork | URL
  locationCreated?: Place
  mainEntry?: Thing
  maintainer?: Organization | Person
  material?: Product | Text | URL
  materialExtent?: QuantitativeValue | Text
  mentions?: Thing
  offers?: any | Offer[]
  pattern?: any | Text
  position?: Integer | Text
  producer?: Organization | Person
  provider?: Organization | Person
  publication?: any
  publisher?: Organization | Person
  publisherImprint?: Organization
  publishingPrinciples?: CreativeWork | URL
  recordedAt?: Event
  releasedEvent?: any
  review?: Review
  schemaVersion?: Text | URL
  sdDatePublished?: DateTime
  sdLicense?: CreativeWork | URL
  sdPublisher?: Organization | Person
  size?: any | QuantitativeValue | Text
  sourceOrganization?: Organization
  spatial?: Place
  spatialCoverage?: Place
  sponsor?: Organization | Person
  teaches?: any | Text
  temporal?: DateTime | Text
  temporalCoverage?: DateTime | Text | URL
  text?: Text
  thumbnailUrl?: URL
  timeRequired?: any
  translationOfWork?: CreativeWork
  translator?: Organization | Person
  typicalAgeRange?: Text
  usageInfo?: CreativeWork | URL
  version?: number | Text
  video?: any
  workExample?: CreativeWork
  workTranslation?: CreativeWork
}

export default CreativeWork
