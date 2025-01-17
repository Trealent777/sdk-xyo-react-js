import { XyoPayloadRenderPlugin } from '@xyo-network/react-payload-plugin'
import { ContextExState, ListMode } from '@xyo-network/react-shared'
import { Dispatch, SetStateAction } from 'react'

export interface EmbedPluginVisibilityConfig {
  hideAvatar?: boolean
  hideTitle?: boolean
  hideRefreshButton?: boolean
  hideTimestamp?: boolean
  hideCardActions?: boolean
  hideCardHeader?: boolean
  hideErrorDetails?: boolean
}

/**
 * Extend for custom plugin configuration
 */
export interface XyoPluginConfig {
  listMode?: ListMode
}

export interface XyoEmbedPluginBase {
  plugins?: XyoPayloadRenderPlugin[]
  /** XyoEmbedPlugin component configuration */
  embedPluginConfig?: XyoPluginConfig
  /** @deprecated use huriPayload */
  huri?: string
  refreshTitle?: string
  timestampLabel?: string
  hideElementsConfig?: EmbedPluginVisibilityConfig
}

export interface XyoEmbedPluginState extends XyoEmbedPluginBase, ContextExState {
  activePlugin?: XyoPayloadRenderPlugin
  setActivePlugin?: Dispatch<SetStateAction<XyoPayloadRenderPlugin | undefined>>
}
