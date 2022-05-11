import { useAsyncEffect } from '@xylabs/sdk-react'
import { Dispatch, useState } from 'react'

import { useArchive } from '../../../../archive'
import { useArchivistApi } from '../../../../archivist-api'

export const useSchemaList = (knownSchemaList?: string[]): [string[] | undefined, Dispatch<string[]>] => {
  const { api } = useArchivistApi(false)
  const { archive = 'temp' } = useArchive(false)
  const [schemaList, setSchemaList] = useState<string[] | undefined>(knownSchemaList)

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (mounted) => {
      if (api && archive) {
        const list = await api?.archive(archive).payload.schema.get()
        if (mounted()) {
          setSchemaList(list)
        }
      }
    },
    [api, archive]
  )

  return [schemaList, setSchemaList]
}
