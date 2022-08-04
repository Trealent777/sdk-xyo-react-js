import { XyoPayload } from '@xyo-network/payload'
import { createPayloadRenderPlugin, XyoPayloadRenderPlugin } from '@xyo-network/react-payload-plugin'
import { XyoSchemaPayloadSchema } from '@xyo-network/schema-payload-plugin'

import { DetailsBox } from './Details'

export const RenderPlugin: XyoPayloadRenderPlugin = createPayloadRenderPlugin({
  canRender: (payload?: XyoPayload) => payload?.schema === XyoSchemaPayloadSchema,
  components: {
    box: {
      details: DetailsBox,
    },
  },
  name: 'Schema',
})
