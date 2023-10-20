import { IDetailProps } from '../types/store'

export const targetStoreDummyData: IDetailProps = {
  targetStore: {
    nid: 1139991886,
    season: 2,
    episode: 10,
    characteristic: '꽃게닭볶음탕',
    name: '도비네 꽃도리탕 다산점',
    coordinates: [37.6237034001238, 127.152183499685],
    foodKind: '닭볶음탕',
    address: '경기 남양주시 다산중앙로123번길 11 1층 103호, 104호, 105호',
    phone: '031-551-1437',
    images: [
      'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f320_320&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201211_36%2F1607662455212eDCuG_JPEG%2FCJDohOkPZPdBiiVYGCxyIcrK.jpg',
      'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f320_320&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211119_275%2F1637298843427513zj_JPEG%2F1635480580123.jpg',
      'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f320_320&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211119_135%2F1637298812423E3ona_JPEG%2F1635480580123.jpg',
    ],
    description:
      '도비네 꽃도리탕은 하루 80마리 한정수량 판매 합니다. 24시간동안 특제소스에 숙성시키는 것을 기본원칙으로 하고 있으며, 조미료를 전혀 사용하지 않고 있습니다.',
    menus: [
      {
        name: '꽃게닭도리탕(한마리)',
        price: '38,000원',
      },
      {
        name: '껍질깐새우닭도리탕(반마리)',
        price: '28,000원',
      },
      {
        name: '껍질깐새우닭도리탕(한마리)',
        price: '38,000원',
      },
      {
        name: '꽃게닭도리탕(반마리)',
        price: '28,000원',
      },
      {
        name: '묵은지닭도리탕(반마리)',
        price: '25,000원',
      },
      {
        name: '묵은지닭도리탕(한마리)',
        price: '35,000원',
      },
      {
        name: '정통닭도리탕(반마리)',
        price: '18,000원',
      },
      {
        name: '정통닭도리탕(한마리)',
        price: '26,000원',
      },
      {
        name: '매콤게살크림파스타',
        price: '18,000원',
      },
      {
        name: '쭈꾸미닭도리탕 반마리',
        price: '28,000원',
      },
      {
        name: '쭈꾸미닭도리탕 한마리',
        price: '38,000원',
      },
    ],
  },
  toggle: true,
  onToggleArrowButton: jest.fn(),
}

export const nonTargetStoreDummyData: any = {
  targetStore: false,
  toggle: false,
  onToggleArrowButton: jest.fn(),
}
