import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useAsyncEffect } from '@xylabs/sdk-react'
import { XyoApiError, XyoArchive } from '@xyo-network/sdk-xyo-client-js'
import axios, { AxiosError } from 'axios'
import { useState } from 'react'

import { authDecorator, authServiceList } from '../../../.storybook'
import { useArchive, useArchivistApi } from '../../../contexts'
import { archivistApiDecorator } from '../../.storybook'
import { AuthStatusIconButton } from '../AuthStatusIconButton'
import { XyoApiErrorRender } from './Render'

const StorybookEntry = {
  argTypes: {
    authState: {
      defaultValue: {
        authServiceList,
        jwtToken: 'badToken',
        loggedInAccount: 'none@none.com',
      },
    },
  },
  component: XyoApiErrorRender,
  decorators: [authDecorator],
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Auth/XyoApiErrorRender',
} as ComponentMeta<typeof XyoApiErrorRender>

const TemplateStats: ComponentStory<typeof XyoApiErrorRender> = () => {
  const [apiError, setApiError] = useState<XyoApiError>()
  const [stats, setStats] = useState<{ count: number }>()
  const { api } = useArchivistApi()
  const { archive } = useArchive()

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      try {
        const response = await api?.archive(archive).block.stats.get()
        setStats(response)
        setApiError(undefined)
      } catch (error) {
        setApiError(error as AxiosError)
      }
    },
    [api, archive]
  )

  return (
    <>
      <AuthStatusIconButton />
      <XyoApiErrorRender apiError={apiError}>
        <p>Stats: {stats?.count}</p>
      </XyoApiErrorRender>
    </>
  )
}

const TemplateArchives: ComponentStory<typeof XyoApiErrorRender> = () => {
  const [apiError, setApiError] = useState<AxiosError>()
  const [archives, setArchives] = useState<XyoArchive[]>([])
  const { api } = useArchivistApi()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useAsyncEffect(async () => {
    try {
      if (api) {
        const response = (await api.archives.get()) ?? []
        setArchives(response)
        setApiError(undefined)
      }
    } catch (error) {
      setApiError(error as AxiosError)
    }
  }, [api])

  return (
    <>
      <XyoApiErrorRender apiError={apiError}>
        <AuthStatusIconButton />
        <ul>{archives.length > 0 && archives.map((archive, index) => <li key={index}>{archive.archive}</li>)}</ul>
      </XyoApiErrorRender>
    </>
  )
}

const Template404: ComponentStory<typeof XyoApiErrorRender> = () => {
  const [apiError, setApiError] = useState<AxiosError>()

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      try {
        await axios.get('http://httpstat.us/500')
        setApiError(undefined)
      } catch (error) {
        setApiError(error as AxiosError)
      }
    },
    []
  )

  return <XyoApiErrorRender apiError={apiError}>I should never show</XyoApiErrorRender>
}

TemplateStats.decorators = [archivistApiDecorator]
TemplateArchives.decorators = [archivistApiDecorator]
Template404.decorators = [archivistApiDecorator]

const AuthRequired = TemplateStats.bind({})
const UnAuthedFallback = TemplateArchives.bind({})
const Server400 = Template404.bind({})

export { AuthRequired, Server400, UnAuthedFallback }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry