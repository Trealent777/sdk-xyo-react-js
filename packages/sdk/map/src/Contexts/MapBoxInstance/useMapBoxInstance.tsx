import { assertEx } from '@xylabs/sdk-js'
import { useContext } from 'react'

import { MapBoxInstanceContext } from './Context'

const useMapBoxInstance = () => {
  const context = useContext(MapBoxInstanceContext)
  assertEx('map' in context, 'useMapBoxInstance must be used within a MapBoxInstanceContext')

  return context
}

export { useMapBoxInstance }
