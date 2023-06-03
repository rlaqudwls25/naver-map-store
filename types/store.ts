type Lat = number
type Lng = number
export type Coordinates = [Lat, Lng]

export interface Menu {
  name: 'string'
  price: 'string'
}

export interface StoreInfo {
  nid: number
  season: number
  episode: number
  characteristic: string
  name: string
  coordinates: Coordinates
  foodKind: string
  address: string
  phone: string
  images: string[]
  description: string
  menus: Menu[]
}
