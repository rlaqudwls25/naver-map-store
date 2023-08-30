import { NaverMapType } from '@/types/map'
import { Coordinates } from '@/types/store'
import { mutate } from 'swr'

export const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439]
export const INITIAL_ZOOM = 10

export const MAP_KEY = 'map_key'

const useMap = () => {
  const initialzeMap = (map: NaverMapType) => {
    mutate(MAP_KEY, map)
  }

  return {
    initialzeMap,
  }
}

export default useMap
