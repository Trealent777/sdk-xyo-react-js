import { Typography } from '@mui/material'
import { FlexRow } from '@xylabs/react-flexbox'
import { XyoBoundWitness } from '@xyo-network/boundwitness'
import { useXyoEvent } from '@xyo-network/react-event'
import { Property, PropertyGroup, PropertyGroupProps } from '@xyo-network/react-property'

export type PreviousBlockDetailsProps = PropertyGroupProps & {
  value?: XyoBoundWitness
}

export const BlockLinksDetails: React.FC<PreviousBlockDetailsProps> = ({ value, ...props }) => {
  let elevation = 2
  if (props.paper) {
    elevation += props.elevation ?? 0
  }

  const [ref, dispatch] = useXyoEvent<HTMLDivElement>()

  return (
    <PropertyGroup titleProps={{ elevation }} title="Links" tip="Blocks that are linked to this block" {...props}>
      <Property titleProps={{ elevation }} flexGrow={1} title="Previous Hash" tip={value?.previousHash}>
        {value?.previous_hash ? (
          <FlexRow ref={ref} onClick={() => dispatch?.('boundwitness', 'click', value?.previous_hash)}>
            <Typography fontFamily="monospace">{value?.previous_hash}</Typography>
          </FlexRow>
        ) : (
          'None'
        )}
      </Property>
    </PropertyGroup>
  )
}
