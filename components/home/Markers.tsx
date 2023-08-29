import { queryKeys } from '@/hooks/useStore'
import { StoreInfo } from '@/types/store'
import { useQueryClient } from '@tanstack/react-query'
import React, { Fragment } from 'react'
import Marker from './Marker'
import { NaverMapType } from '@/types/map'
import { useRecoilValue } from 'recoil'
import { mapState } from '@/recoil/atom/map'

const Markers = () => {
  const mapInfo = useRecoilValue(mapState)

  const queryClient = useQueryClient()

  const storeList = queryClient.getQueryData<StoreInfo[]>([
    queryKeys.STORE_LIST,
  ])

  if (!mapInfo || !storeList) return null

  return (
    <Fragment>
      {storeList?.map((store) => {
        return (
          <Marker
            map={mapInfo}
            coordinates={store.coordinates as any}
            key={store.nid}
          />
        )
      })}
    </Fragment>
  )
}

export default Markers
