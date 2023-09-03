import { NaverMapType } from '@/types/map'
import { atom } from 'recoil'

export const mapState = atom<NaverMapType | null>({
  key: 'mapState',
  default: null,
})
