import Script from 'next/script'
import React, { useEffect, useRef } from 'react'
import { NaverMapType } from '@/types/map'
import { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap'
import { Coordinates } from '@/types/store'
import styles from '../../styles/map.module.scss'
// import { useRecoilState } from 'recoil'
// import { mapState } from '@/recoil/atom/store'

interface IMapProps {
  mapId?: string
  initialCenter: Coordinates
  initialZoom: number
  onLoad: (map: NaverMapType) => void
  // handleClearStore: (map: NaverMapType) => void
}

const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: IMapProps) => {
  // const [initMap, setInitMap] = useRecoilState(mapState)
  const mapRef = useRef<NaverMapType | null>(null)

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      scaleContorl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    }

    let map = new window.naver.maps.Map(mapId, mapOptions)
    mapRef.current = map

    if (onLoad) {
      onLoad(map)
    }

    // handleClearStore(map)
  }

  useEffect(() => {
    return () => {
      mapRef.current?.destroy()
    }
  }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} className={styles.map} />
    </>
  )
}

export default Map
