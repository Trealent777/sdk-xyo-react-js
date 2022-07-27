import { XyoPayload } from '@xyo-network/payload'

import { XyoPayloadCardActionArea, XyoPayloadCardContent, XyoPayloadCardHeader, XyoPayloadDetailsBox, XyoPayloadTableCell } from './components'
import { XyoPayloadRenderPlugin } from './XyoPayloadRenderPlugin'

export const DefaultPayloadRenderPlugin: XyoPayloadRenderPlugin = {
  canRender: function (payload?: XyoPayload): boolean {
    return !!payload?.schema
  },
  components: {
    box: {
      details: XyoPayloadDetailsBox,
    },
    card: {
      actionArea: XyoPayloadCardActionArea,
      content: XyoPayloadCardContent,
      header: XyoPayloadCardHeader,
    },
    table: {
      cell: XyoPayloadTableCell,
    },
  },
  name: 'XyoPayload',
}
