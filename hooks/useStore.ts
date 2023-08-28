import { StoreInfo } from '@/types/store'
import { useQuery } from '@tanstack/react-query'

export const queryKeys = {
  STORE_LIST: 'store_list',
}

export const useInitStores = (stores: StoreInfo[]) => {
  const { data } = useQuery([queryKeys.STORE_LIST], () => stores)

  return { data }
}
