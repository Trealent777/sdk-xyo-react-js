/* eslint-disable import/no-internal-modules */
import { Button, Typography } from '@mui/material'
import { ComponentStory, DecoratorFn, Meta } from '@storybook/react'
import { FlexGrowCol } from '@xylabs/react-flexbox'
import { WithRefDecorator } from '@xyo-network/react-storybook'
import { useRef, useState } from 'react'

import { CardContentEx } from './CardContentEx'
import { PageCard } from './PageCard'

const ScrollableDecoratorFn: DecoratorFn = (Story, args) => {
  const [scrollToTop, setScrollToTop] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  args.args.ref = ref
  args.args.scrollToTop = scrollToTop

  const onScrollToTop = () => {
    setScrollToTop(scrollToTop + 1)
  }
  return (
    <FlexGrowCol alignItems="stretch" position="absolute" height="calc(100vh - 2rem)" style={{ inset: 0 }}>
      <Button variant="contained" onClick={onScrollToTop} sx={{ marginBottom: 2 }}>
        ScrollToTop
      </Button>
      <Story {...args} />
    </FlexGrowCol>
  )
}

const StorybookEntry: Meta = {
  argTypes: {},
  component: CardContentEx,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'shared/CardContentEx',
}

const Template: ComponentStory<typeof CardContentEx> = (props) => {
  return (
    <PageCard title="Page Card" subheader="subheader">
      <CardContentEx {...props}>
        {[...Array(100).keys()].map((item) => (
          <Typography key={item}>{item}. - Item row</Typography>
        ))}
      </CardContentEx>
    </PageCard>
  )
}

const Default = Template.bind({})
Default.args = {}

const WithRef = Template.bind({})
WithRef.decorators = [WithRefDecorator]

const WithVariant = Template.bind({})
WithVariant.args = { variant: 'scrollable' }
WithVariant.decorators = [ScrollableDecoratorFn]

export { Default, WithRef, WithVariant }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
