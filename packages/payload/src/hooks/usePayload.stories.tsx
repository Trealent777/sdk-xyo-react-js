/* eslint-disable import/no-internal-modules */
import { ComponentStory, Meta } from '@storybook/react'
import { ButtonEx } from '@xylabs/react-button'
import { FlexCol } from '@xylabs/react-flexbox'
import { ArchivistApiProvider, useArchivistApi } from '@xyo-network/react-archivist-api'
import { lazy, Suspense, useState } from 'react'

import { usePayload } from './usePayload'

const JsonView = lazy(() => import(/* webpackChunkName: "jsonView" */ 'react-json-view'))

const apiDomain = 'https://beta.api.archivist.xyo.network'
const hash = '5605fabad11b10bb5fb86b309ca0970894eda8f22362dda1a489817723bca992'

const Wrapper: React.FC<{ hash?: string }> = ({ hash }) => (
  <ArchivistApiProvider apiDomain={apiDomain}>
    <UsePayloadComponent hash={hash} />
  </ArchivistApiProvider>
)

const UsePayloadComponent: React.FC<{ hash?: string }> = ({ hash }) => {
  const { api } = useArchivistApi()
  const [trigger, setTrigger] = useState<string>()
  const [payload, notFound] = usePayload(trigger)

  return (
    <>
      {api ? (
        <>
          <ButtonEx variant="contained" marginBottom={2} onClick={() => setTrigger(hash)}>
            Fetch Payload
          </ButtonEx>
          <ButtonEx variant="contained" onClick={() => setTrigger('foo')}>
            Fetch Not Found
          </ButtonEx>
        </>
      ) : null}
      <FlexCol my={3}>
        <Suspense fallback={<FlexCol busy />}>
          {notFound ? 'Not Found' : null}
          <JsonView src={payload || {}} />
        </Suspense>
      </FlexCol>
    </>
  )
}

const StorybookEntry: Meta = {
  argTypes: {},
  component: UsePayloadComponent,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'payload/usePayload',
}

const Template: ComponentStory<typeof UsePayloadComponent> = (props) => {
  return <Wrapper {...props} />
}

const Default = Template.bind({})
Default.args = { hash }

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry