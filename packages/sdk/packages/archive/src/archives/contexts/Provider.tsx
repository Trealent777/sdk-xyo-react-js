import { useAsyncEffect, WithChildren } from '@xylabs/react-shared'
import { XyoArchive } from '@xyo-network/api'
import { useArchivistApi } from '@xyo-network/react-archivist-api'
import { useCallback, useState } from 'react'

import { ArchivesContext } from './Context'

export const ArchivesProvider: React.FC<WithChildren> = ({ children }) => {
  const [archives, setArchives] = useState<XyoArchive[]>()

  const { api } = useArchivistApi()

  const refresh = useCallback(
    async (mounted: () => boolean) => {
      const loadedArchives = (await api?.archives.get())?.map((response) => response) ?? [{ archive: 'temp' }]
      if (mounted()) {
        setArchives(loadedArchives)
      }
    },
    [api],
  )

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async (mounted) => {
      await refresh(mounted)
    },
    [refresh],
  )

  return <ArchivesContext.Provider value={{ archives, provided: true, refresh, setArchives }}>{children}</ArchivesContext.Provider>
}