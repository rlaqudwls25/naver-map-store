import { NaverMapType } from '../types/map'
import { StoreInfo } from '../types/store'
import { mutate } from 'swr'

export const CURRENT_STORE_KEY = 'cuurrent_store_key'

const useCurrentStore = () => {
  const targetStore = (store: StoreInfo) => {
    mutate(CURRENT_STORE_KEY, store)
  }

  const clearStore = () => {
    mutate(CURRENT_STORE_KEY, null)
  }

  return {
    targetStore,
    clearStore,
  }
}

export default useCurrentStore
