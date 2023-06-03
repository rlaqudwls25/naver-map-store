import Script from 'next/script'
import React, { useEffect, useRef } from 'react'
import { NaverMapType } from '@/types/map'
import { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap'
import { Coordinates } from '@/types/store'

interface IMapProps {
  mapId?: string
  onLoad: (map: NaverMapType) => void
  initialCenter?: Coordinates
  initialZoom?: number
}

const Map = ({
  onLoad,
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
}: IMapProps) => {
  const mapRef = useRef<NaverMapType | null>(null)

  useEffect(() => {
    return () => {
      mapRef.current?.destroy()
    }
  }, [])

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleContorl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    }

    const map = new window.naver.maps.Map(mapId, mapOptions)
    mapRef.current = map

    console.log('mapRef', mapRef)

    if (onLoad) {
      onLoad(map)
    }
  }
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} style={{ width: '100%', height: '100%' }} />
    </>
  )
}

export default Map
