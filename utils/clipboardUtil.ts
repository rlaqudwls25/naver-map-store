import copy from 'copy-to-clipboard'
import { StoreInfo } from '../types/store'

export const copyUrl = (targetStore: StoreInfo) => {
  let url

  const {
    NEXT_PUBLIC_DEV_API_URL,
    NEXT_PUBLIC_TEST_API_URL,
    NEXT_PUBLIC_API_URL,
    NODE_ENV,
  } = process.env

  if (NODE_ENV === 'development') {
    url = NEXT_PUBLIC_DEV_API_URL
  } else if (NODE_ENV === 'test') {
    url = NEXT_PUBLIC_TEST_API_URL
  } else if (NODE_ENV === 'production') {
    url = NEXT_PUBLIC_API_URL
  }

  copy(url + '/' + targetStore.name)
}
