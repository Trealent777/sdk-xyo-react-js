/* eslint-disable deprecation/deprecation */
/* eslint-disable import/no-deprecated */
import { createPayloadRenderPlugin, XyoPayloadRenderPlugin } from '@xyo-network/react-payload-plugin'

import { DetailsRenderer } from './components'

/** @deprecated use from @xyo-network/react-default-plugin instead */
export const DetailsRenderPlugin: XyoPayloadRenderPlugin = {
  ...createPayloadRenderPlugin({
    canRender: () => true,
    components: {
      box: {
        details: DetailsRenderer,
      },
    },
    name: 'Details',
  }),
}
