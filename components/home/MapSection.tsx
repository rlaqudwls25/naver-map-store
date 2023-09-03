import React, { Fragment } from 'react'
import Map from './Map'
import Markers from './Markers'
import useMap from '@/hooks/useMap'
import { NaverMapType } from '@/types/map'
import useCurrentStore from '@/hooks/useCurrentStore'
// import { useRecoilState, useRecoilValue } from 'recoil'
// import { mapState } from '@/recoil/atom/store'

const MapSection = () => {
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
      <Map onLoad={onLoadMap} />
      <Markers />
    </Fragment>
  )
}

export default MapSection
