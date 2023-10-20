import copy from 'copy-to-clipboard'
import { StoreInfo } from '../types/store'

export const copyUrl = (targetStore: StoreInfo) => {
  copy(location.origin + '/' + targetStore.name)
}
