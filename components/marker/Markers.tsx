import { STORE_KEY } from '@/hooks/useStore'
import { StoreInfo } from '@/types/store'
import useSWR from 'swr'
import React, { Fragment } from 'react'
import Marker from './Marker'
import { NaverMapType } from '@/types/map'
import { MAP_KEY } from '@/hooks/useMap'
import { generateStoreMarkerIcon } from '@/utils/generateMarker'
import useCurrentStore, { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore'
// import { useRecoilValue } from 'recoil'
// import { mapState } from '@/recoil/atom/store'

const Markers = () => {
  const { data: storeList } = useSWR<StoreInfo[]>(STORE_KEY)
  const { data: mapInfo } = useSWR<NaverMapType>(MAP_KEY)
  // const mapInfo = useRecoilValue<NaverMapType | null>(mapState)

  const { data: targetStoreInfo } = useSWR<StoreInfo>(CURRENT_STORE_KEY)

  const { targetStore, clearStore } = useCurrentStore()

  if (!storeList || !mapInfo) return null

  return (
    <Fragment>
      {storeList?.map((store) => {
        return (
          <Marker
            map={mapInfo}
            coordinates={store.coordinates}
            key={store.nid}
            icon={generateStoreMarkerIcon(store.season, false)}
            onClick={() => targetStore(store)}
          />
        )
      })}

      {targetStoreInfo && (
        <Marker
          map={mapInfo}
          coordinates={targetStoreInfo.coordinates}
          icon={generateStoreMarkerIcon(targetStoreInfo.season, true)}
          key={targetStoreInfo.nid}
          onClick={clearStore}
        />
      )}
    </Fragment>
  )
}

export default Markers
