import { ComponentStory, Meta } from '@storybook/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { appThemeDecorator, samplePayload } from '../../../../.storybook'
import { PayloadDetails } from '../Details'
import { PayloadValidationDetails } from './ValidationDetails'

const StorybookEntry: Meta = {
  argTypes: {},
  args: {
    value: {
      schema: 'network.xyo.schema',
    },
  },
  component: PayloadDetails,
  decorators: [appThemeDecorator],
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Payload/ValidationDetails',
}

const Template: ComponentStory<typeof PayloadValidationDetails> = (args) => (
  <BrowserRouter>
    <Routes>
      <Route element={<h1>navigated to huri</h1>} path="/:hash/schema" />
    </Routes>
    <PayloadValidationDetails {...args}></PayloadValidationDetails>
  </BrowserRouter>
)

const Default = Template.bind({})
Default.args = { skipBody: true, skipMeta: true }

const WithActions = Template.bind({})
WithActions.args = { nodeWebSiteUrl: 'http://google.com', viewSchemaUrl: '/someHash/schema' }

const WithErrorsInToolTip = Template.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
WithErrorsInToolTip.args = { value: { ...samplePayload, ...{ _hash: '6fe3f745b1179fefa74cc3c7eab58321bee1c9ca9e34d9585467364cc5d3bbe2' } } }

const SkipBody = Template.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SkipBody.args = { skipBody: true, value: { _hash: '44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a', _timestamp: new Date().getTime() } }

const SkipMeta = Template.bind({})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SkipMeta.args = { skipMeta: true, value: { _hash: null, schema: 'network.xyo.schema' } }

const EditMode = Template.bind({})
EditMode.args = { nodeWebSiteUrl: 'https://beta.node.xyo.network/witness/network.xyo.schema/observe?network=kerplunk&hash=123456', value: samplePayload }

export { Default, EditMode, SkipBody, SkipMeta, WithActions, WithErrorsInToolTip }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
