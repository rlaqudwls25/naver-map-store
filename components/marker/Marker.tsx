import { ImageIcon, NaverMapType } from '../../types/map'
import { Coordinates } from '../../types/store'
import { useEffect } from 'react'

interface IMarkerProps {
  map: NaverMapType
  coordinates: Coordinates
  onClick?: () => void
  icon: ImageIcon
}

const Marker = ({ map, coordinates, icon, onClick }: IMarkerProps): null => {
  console.log('icon', icon)

  useEffect(() => {
    let marker: naver.maps.Marker | null = null

    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...coordinates),
        icon,
      })

      if (onClick) {
        naver.maps.Event.addListener(marker, 'click', onClick)
      }
    }

    return () => {
      marker?.setMap(null)
    }
  }, [map])

  return null
}

export default Marker
