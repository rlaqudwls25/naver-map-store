import { useCallback } from 'react'
import { NaverMapType } from '../types/map'
import { Coordinates } from '../types/store'
import { mutate } from 'swr'
import useSWR from 'swr'

export const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439]
export const INITIAL_ZOOM = 10

export const MAP_KEY = 'map_key'

const useMap = () => {
  const { data: map } = useSWR(MAP_KEY)

  const initialzeMap = useCallback((map: NaverMapType) => {
    mutate(MAP_KEY, map)
  }, [])

  const resetMapOptions = useCallback(() => {
    map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM)
  }, [map])

  const getMapOptions = useCallback(() => {
    const mapCenter = map.getCenter()
    const center: Coordinates = [mapCenter.lat(), mapCenter.lng()]
    const zoom = map.getZoom()

    return { center, zoom }
  }, [map])

  return {
    initialzeMap,
    resetMapOptions,
    getMapOptions,
  }
}

export default useMap
