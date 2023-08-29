import { NaverMapType } from '@/types/map'
import { atom } from 'recoil'

export const mapState = atom<any>({
  key: 'mapState',
  default: null,
})
