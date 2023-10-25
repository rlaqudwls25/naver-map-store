import copy from 'copy-to-clipboard'
import { StoreInfo } from '../types/store'

export const copyUrl = (targetStore: StoreInfo) => {
  let url

  if (process.env.NODE_ENV === 'development') {
    url = process.env.NEXT_PUBLIC_DEV_API_URL
  } else if (process.env.NODE_ENV === 'test') {
    url = process.env.NEXT_PUBLIC_TEST_API_URL
  } else if (process.env.NODE_ENV === 'production') {
    url = process.env.NEXT_PUBLIC_API_URL
  }

  copy(url + '/' + targetStore.name)
}
