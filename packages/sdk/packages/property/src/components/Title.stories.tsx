import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PropertyTitle } from './Title'

const StorybookEntry = {
  argTypes: {},
  component: PropertyTitle,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'property/Title',
} as ComponentMeta<typeof PropertyTitle>

const Template: ComponentStory<typeof PropertyTitle> = (args) => <PropertyTitle {...args}></PropertyTitle>

const Default = Template.bind({})
Default.args = {}

const WithData = Template.bind({})

WithData.args = { title: 'Sample Title' }

const WithDataAndActions = Template.bind({})

WithDataAndActions.args = { title: 'Sample Title' }

export { Default, WithData, WithDataAndActions }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
