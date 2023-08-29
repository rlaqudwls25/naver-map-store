import { mapState } from '@/recoil/atom/map'
import { NaverMapType } from '@/types/map'
import { Coordinates } from '@/types/store'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

interface IMarkerProps {
  map: any
  coordinates: Coordinates
  onClick?: () => void
  //   icon: ImageIcon
}

interface ImageIcon {
  url: string
  size: naver.maps.Size
  origin: naver.maps.Point
  scaledSize?: naver.maps.Size
}

const Marker = ({ map, coordinates, onClick }: IMarkerProps): null => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null

    marker = new naver.maps.Marker({
      map: map,
      position: new naver.maps.LatLng(...coordinates),
    })

    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick)
    }

    return () => {
      marker?.setMap(null)
    }
  }, [map])

  return null
}

export default Marker
