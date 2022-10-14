import { FlexBoxProps, FlexCol } from '@xylabs/react-flexbox'
import { WithChildren } from '@xylabs/react-shared'
import { XyoBoundWitness } from '@xyo-network/boundwitness'
import { XyoPayload } from '@xyo-network/payload'
import { PayloadDataDetails, PayloadJsonDetails } from '@xyo-network/react-payload-details'
import { forwardRef } from 'react'

import { BlockPayloads } from './Payloads'
import { BlockSignatureDetails } from './SignatureDetails'
import { BlockValidationDetails } from './ValidationDetails'

export interface BlockDetailsProps extends WithChildren, FlexBoxProps {
  block?: XyoBoundWitness
  paper?: boolean
  payloads?: XyoPayload[]
}

const BlockDetails = forwardRef<unknown, BlockDetailsProps>(({ paper, block, payloads, children, ...props }, ref) => {
  return (
    <FlexCol justifyContent="flex-start" alignItems="stretch" gap={1} ref={ref} {...props}>
      <PayloadDataDetails paper={paper} payload={block} size="large" badge />
      <BlockSignatureDetails paper={paper} block={block} />
      <BlockPayloads paper={paper} payloads={payloads} />
      <BlockValidationDetails paper={paper} value={block} />
      <PayloadJsonDetails paper={paper} payload={block} />
      {children}
    </FlexCol>
  )
})

BlockDetails.displayName = 'BlockDetails [XYO]'

export { BlockDetails }
