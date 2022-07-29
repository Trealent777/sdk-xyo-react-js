import { Alert } from '@mui/material'
import { FlexCol } from '@xylabs/react-flexbox'
import { Feature, Point } from 'geojson'
import { useCallback, useEffect, useState } from 'react'

import { useMapBoxInstance, useMapSettings } from '../Contexts'
import { XyoMapBoxBaseProps } from '../lib'
import { XyoMapPoints } from '../MapBoxClasses'
import { MapBox } from './MapBox'
import { MapSettings } from './MapSettingsComponents'

interface MapBoxPointsProps extends XyoMapBoxBaseProps {
  features?: Feature<Point>[]
  accessToken: string
}

const MapBoxPoints: React.FC<MapBoxPointsProps> = ({ accessToken, features, layers, fitToPointsPadding = 20, zoom, ...props }) => {
  const [MapPoints, setMapPoints] = useState<XyoMapPoints>()
  const { mapSettings } = useMapSettings()
  const { map, mapInitialized } = useMapBoxInstance()

  const updateFeatures = useCallback(() => {
    if (MapPoints?.isMapReady && features?.length) {
      layers?.forEach((layer) => {
        MapPoints.initializeMapSource(layer)
      })
    }
  }, [MapPoints, features, layers])

  const updateMapSetup = useCallback(() => {
    const { fitToPoints } = mapSettings || {}

    if (MapPoints && map) {
      if (fitToPoints?.value === true) {
        MapPoints.initialMapPositioning({ padding: fitToPointsPadding })
      }
    }
  }, [MapPoints, map, mapSettings, fitToPointsPadding])

  const reInitializeMap = useCallback(() => {
    MapPoints?.initialMapPositioning({ padding: fitToPointsPadding })
    updateFeatures()
  }, [MapPoints, fitToPointsPadding, updateFeatures])

  useEffect(() => {
    if (map && features?.length) {
      setMapPoints(new XyoMapPoints({ features, map, zoom }))
    }
  }, [map, features, zoom])

  useEffect(() => {
    if (mapInitialized) {
      updateMapSetup()
      reInitializeMap()
    }
  }, [mapInitialized, reInitializeMap, updateMapSetup])

  return (
    <FlexCol alignItems="stretch" {...props}>
      {features ? (
        <>
          <MapBox accessToken={accessToken} zoom={zoom} />
          <MapSettings />
        </>
      ) : (
        <Alert severity="error">No data to show</Alert>
      )}
    </FlexCol>
  )
}

export { MapBoxPoints }
