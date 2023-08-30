import { STORE_KEY } from '@/hooks/useStore'
import { StoreInfo } from '@/types/store'
import useSWR from 'swr'
import React, { Fragment } from 'react'
import Marker from './Marker'
import { NaverMapType } from '@/types/map'
import { MAP_KEY } from '@/hooks/useMap'
import { generateStoreMarkerIcon } from '@/utils/generateMarker'

const Markers = () => {
  const { data: storeList } = useSWR<StoreInfo[]>(STORE_KEY)
  const { data: mapInfo } = useSWR<NaverMapType>(MAP_KEY)

  return (
    <Fragment>
      {mapInfo &&
        storeList?.map((store) => {
          return (
            <Marker
              map={mapInfo}
              coordinates={store.coordinates}
              key={store.nid}
              icon={generateStoreMarkerIcon(store.season)}
            />
          )
        })}
    </Fragment>
  )
}

export default Markers
