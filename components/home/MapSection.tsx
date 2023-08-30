import React, { Fragment } from 'react'
import Map from './Map'
import Markers from './Markers'
import useMap from '@/hooks/useMap'
import { NaverMapType } from '@/types/map'

const MapSection = () => {
  const { initialzeMap } = useMap()

  const onLoadMap = (map: NaverMapType) => {
    initialzeMap(map)
  }

  return (
    <Fragment>
      <Map onLoad={onLoadMap} />
      <Markers />
    </Fragment>
  )
}

export default MapSection
