import { StoreInfo } from '@/types/store'
import { mutate } from 'swr'

export const STORE_KEY = 'store_key'

const useStores = () => {
  const initializeStores = (stores: StoreInfo[]) => {
    mutate(STORE_KEY, stores)
  }

  return {
    initializeStores,
  }
}

export default useStores
