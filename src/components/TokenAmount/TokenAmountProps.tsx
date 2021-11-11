import { BigNumber } from '@xyo-network/sdk-xyo-js'
import { MouseEventHandler } from 'react'

import { FlexBoxProps } from '../FlexBox'

interface TokenAmountProps extends FlexBoxProps {
  amount?: BigNumber | null
  label?: string
  logo?: boolean
  places?: number
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
}

export default TokenAmountProps
