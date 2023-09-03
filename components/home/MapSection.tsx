import React, { Fragment } from 'react'
import Map from './Map'
import Markers from './Markers'
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap'
import { NaverMapType } from '@/types/map'
import useCurrentStore from '@/hooks/useCurrentStore'
import { useRouter } from 'next/router'
import { Coordinates } from '@/types/store'
// import { useRecoilState, useRecoilValue } from 'recoil'
// import { mapState } from '@/recoil/atom/store'

const MapSection = () => {
  const router = useRouter()

  const queryUrl = new URLSearchParams(router.asPath.slice(1))

  const initialZoom = queryUrl.get('zoom')
    ? Number(queryUrl.get('zoom'))
    : INITIAL_ZOOM

  const initialCenter: Coordinates =
    queryUrl.get('lat') && queryUrl.get('lng')
      ? [Number(queryUrl.get('lat')), Number(queryUrl.get('lng'))]
      : INITIAL_CENTER

  const { initialzeMap } = useMap()

  const { clearStore } = useCurrentStore()

  const onLoadMap = (map: NaverMapType) => {
    initialzeMap(map)
    naver.maps.Event.addListener(map, 'click', clearStore)
  }

  // const handleClearStore = (map: NaverMapType) => {
  //   naver.maps.Event.addListener(map, 'click', clearStore)
  // }

  return (
    <Fragment>
      <Map
        onLoad={onLoadMap}
        initialZoom={initialZoom}
        initialCenter={initialCenter}
      />
      <Markers />
    </Fragment>
  )
}

export default MapSection
