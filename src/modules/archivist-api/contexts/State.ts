import { XyoApiError, XyoApiResponse, XyoArchivistApi } from '@xyo-network/api'

export type XyoApiErrorCallback = (response: XyoApiResponse) => void

export interface ArchivistApiState {
  api?: XyoArchivistApi
  currentToken?: string
  successHistory?: XyoApiResponse[]
  responseHistory?: XyoApiResponse[]
  failureHistory?: XyoApiResponse[]
  errorHistory?: XyoApiError[]
}
