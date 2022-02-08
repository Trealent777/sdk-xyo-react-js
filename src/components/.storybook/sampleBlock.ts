import { XyoAddress, XyoBoundWitnessBuilder } from '@xyo-network/sdk-xyo-client-js'
import { samplePayload } from './samplePayload'

export const sampleBlock = {...(new XyoBoundWitnessBuilder().payload(samplePayload).witness(new XyoAddress(), null).build()), _archive: 'temp'}