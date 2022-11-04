import { FlexBoxProps, FlexCol } from '@xylabs/react-flexbox'
import { EthAddress } from '@xylabs/sdk-js'
import { EthAccountBox } from '@xylabs/sdk-react'
import { XyoModuleWrapper } from '@xyo-network/module'

import { ModuleRenderProps } from '../ModuleRenderProps'

export const ModuleDetailsBox: React.FC<ModuleRenderProps & FlexBoxProps> = ({ module, ...props }) => {
  const wrapper = module ? new XyoModuleWrapper(module) : undefined
  return (
    <FlexCol {...props}>
      <EthAccountBox address={EthAddress.fromString(wrapper?.address)} />
    </FlexCol>
  )
}