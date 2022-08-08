import { Alert, AlertTitle } from '@mui/material'
import { ButtonEx } from '@xylabs/react-button'
import { FlexGrowRow } from '@xylabs/react-flexbox'
import { useAsyncEffect } from '@xylabs/react-shared'
import { XyoApiError } from '@xyo-network/api'
import { Huri, XyoPayload } from '@xyo-network/payload'
import { XyoApiErrorRender } from '@xyo-network/react-auth-service'
import { XyoPayloadRenderPlugin } from '@xyo-network/react-payload-plugin'
import { ListModeProvider } from '@xyo-network/react-shared'
import { ResultLoader } from '@xyo-network/react-webapp'
import { useState } from 'react'

import { EmbedControlWrap, EmbedRenderSelect } from './controls'
import { ListModeSelect } from './ListModeSelect'
import { RenderComponent } from './RenderComponent'
import { XyoEmbedPluginProps } from './XyoEmbedPluginProps'

const renderSelectId = 'render-select-id'
const renderSelectLabel = 'Renderer'

const listModeSelectId = 'listmode-select-id'
const listModeSelectLabel = 'List Mode'

export const XyoEmbedPlugin: React.FC<XyoEmbedPluginProps> = ({ plugins = [], huri, ...props }) => {
  const [payload, setPayload] = useState<XyoPayload>()
  const [notFound, setNotFound] = useState<boolean>()
  const [huriApiError, setHuriApiError] = useState<XyoApiError>()
  const [ActivePlugin, setActivePlugin] = useState<XyoPayloadRenderPlugin>(plugins[0])

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (mounted) => {
      if (!payload && huri) {
        try {
          const huriInstance = new Huri(huri)
          const result = await huriInstance.fetch()

          if (mounted()) {
            if (result === null) setNotFound(true)
            if (payload === undefined) setPayload(result)
          }
        } catch (e) {
          setHuriApiError(e as XyoApiError)
        }
      }
    },
    [huri, payload]
  )

  const refreshHuri = () => {
    setHuriApiError(undefined)
    setNotFound(undefined)
    setPayload(undefined)
  }

  if (payload && plugins?.length === 0) {
    return (
      <Alert severity="warning">
        <AlertTitle>Missing plugins!</AlertTitle>Payload found but no plugins were present.
      </Alert>
    )
  }

  return (
    <ListModeProvider>
      <ResultLoader searchResult={payload} notFound={!!notFound} apiError={huriApiError}>
        <XyoApiErrorRender apiError={huriApiError} rowGap={2} {...props}>
          <FlexGrowRow columnGap={2} rowGap={2} flexWrap="wrap">
            <EmbedControlWrap formId={renderSelectId} formLabel={renderSelectLabel}>
              {plugins.length > 1 ? (
                <EmbedRenderSelect
                  label={renderSelectLabel}
                  labelId={renderSelectId}
                  activePlugin={ActivePlugin}
                  plugins={plugins}
                  setActivePlugin={setActivePlugin}
                />
              ) : null}
            </EmbedControlWrap>
            {(ActivePlugin?.components?.box?.listModes?.length ?? 0) > 1 ? (
              <EmbedControlWrap formId={listModeSelectId} formLabel={listModeSelectLabel}>
                <ListModeSelect size="small" label={listModeSelectLabel} labelId={listModeSelectId} />
              </EmbedControlWrap>
            ) : null}
          </FlexGrowRow>
          <RenderComponent payload={payload} ActivePlugin={ActivePlugin} />
          <FlexGrowRow>
            <ButtonEx variant="contained" onClick={refreshHuri}>
              Refresh
            </ButtonEx>
          </FlexGrowRow>
        </XyoApiErrorRender>
      </ResultLoader>
    </ListModeProvider>
  )
}
