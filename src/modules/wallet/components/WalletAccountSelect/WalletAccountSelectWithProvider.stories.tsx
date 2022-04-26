import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FlexRow } from '@xylabs/sdk-react'
import { XyoWalletBase } from '@xyo-network/sdk-xyo-client-js'

import { WalletProvider } from '../../contexts'
import { WalletAccountSelect } from './WalletAccountSelect'

const StorybookEntry = {
  argTypes: {},
  component: WalletAccountSelect,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'wallet/WalletAccountSelectWithProvider',
} as ComponentMeta<typeof WalletAccountSelect>

const Template: ComponentStory<typeof WalletAccountSelect> = (args) => {
  return (
    <FlexRow>
      <WalletProvider defaultWallet={new XyoWalletBase('test me')}>
        <WalletAccountSelect {...args}></WalletAccountSelect>
      </WalletProvider>
    </FlexRow>
  )
}

const Default = Template.bind({})
Default.args = { icons: true }

const IconsOnly = Template.bind({})
IconsOnly.args = { iconOnly: true, icons: true }

export { Default, IconsOnly }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry