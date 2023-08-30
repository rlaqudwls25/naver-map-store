export type NaverMapType = naver.maps.Map

export interface ImageIcon {
  /** 이미지  */
  url: string
  /** 스프라이트 각 이미지 사이즈 */
  size: naver.maps.Size
  /** 스프라이트 이미지 클리핑 위치 */
  origin: naver.maps.Point
  /** 스프라이트 이미지 전체 사이즈 리사이징 */
  scaledSize?: naver.maps.Size
}
