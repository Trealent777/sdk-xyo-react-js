import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonEx } from '@xylabs/react-button'
import { FlexCol } from '@xylabs/react-flexbox'
import { XyoBoundWitness } from '@xyo-network/boundwitness-model'
import { sampleBlock, useAppThemeDecorator } from '@xyo-network/react-storybook'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { BlockTable } from './Table'

const StorybookEntry = {
  argTypes: {},
  component: BlockTable,
  decorators: [useAppThemeDecorator],
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'block/Table',
} as ComponentMeta<typeof BlockTable>

const Template: ComponentStory<typeof BlockTable> = ({ blocks: blocksParam, ...args }) => {
  const [blocks, setBlocks] = useState<XyoBoundWitness[]>(blocksParam ?? [])
  return (
    <BrowserRouter>
      <FlexCol alignItems="stretch">
        <BlockTable blocks={blocks} {...args}></BlockTable>
      </FlexCol>
      <ButtonEx onClick={() => setBlocks([...blocks, sampleBlock])}>Add</ButtonEx>
    </BrowserRouter>
  )
}

const Default = Template.bind({})
Default.args = {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const badBlock = sampleBlock

const WithData = Template.bind({})
const sampleBlocks = [...Array(100).keys()].map(() => sampleBlock)
WithData.args = { blocks: sampleBlocks }

const WithError = Template.bind({})
WithError.args = { blocks: [sampleBlock, badBlock as XyoBoundWitness] }

export { Default, WithData, WithError }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
