import { ComponentStory, Meta } from '@storybook/react'
import { useAppThemeDecorator } from '@xyo-network/react-storybook'

import { SchemaProperty } from './SchemaProperty'

const StorybookEntry: Meta = {
  argTypes: {},
  args: {},
  component: SchemaProperty,
  decorators: [useAppThemeDecorator],
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Schema/SchemaProperty',
}

const Template: ComponentStory<typeof SchemaProperty> = (args) => <SchemaProperty {...args} />

const Default = Template.bind({})
Default.args = {}

const WithVerfiedValue = Template.bind({})
WithVerfiedValue.args = { value: 'network.xyo.schema' }

const WithVerfiedValuePaper = Template.bind({})
WithVerfiedValuePaper.args = { paper: true, value: 'network.xyo.schema' }

const WithUnverfiedValue = Template.bind({})
WithUnverfiedValue.args = { value: 'network.xyo.blahblah' }

export { Default, WithUnverfiedValue, WithVerfiedValue, WithVerfiedValuePaper }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
