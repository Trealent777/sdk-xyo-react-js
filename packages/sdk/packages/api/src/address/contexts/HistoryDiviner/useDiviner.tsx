import { useAsyncEffect } from '@xylabs/react-shared'
import { XyoBoundWitness } from '@xyo-network/boundwitness-model'
import { AddressHistoryQuerySchema, DivinerWrapper } from '@xyo-network/diviner'
import { XyoError } from '@xyo-network/module'
import { XyoPayloadBuilder } from '@xyo-network/payload-builder'
import { useState } from 'react'

import { useAddressHistoryDiviner } from './use'

export const useDivineAddressHistory = (address?: string): [XyoBoundWitness[] | undefined, XyoError | undefined, () => void] => {
  const [blocks, setBlocks] = useState<XyoBoundWitness[]>()
  const [error, setError] = useState<XyoError>()
  const { diviner } = useAddressHistoryDiviner()
  const [refresh, setRefresh] = useState(1)

  const refreshHistory = () => setRefresh((previous) => previous + 1)

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (mounted) => {
      if (diviner && address) {
        try {
          const source = new XyoPayloadBuilder({ schema: AddressHistoryQuerySchema }).fields({ address }).build()
          const result = (await new DivinerWrapper(diviner).divine([source])) as XyoBoundWitness[]
          if (mounted() && result) {
            setBlocks(result)
          }
        } catch (e) {
          setError(e as XyoError)
        }
      }
    },
    [address, diviner, refresh],
  )

  return [blocks, error, refreshHistory]
}
