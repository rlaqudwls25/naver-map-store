import { render, screen } from '@testing-library/react'
import DetailHeader from '../DetailHeader'
import {
  nonTargetStoreDummyData,
  targetStoreDummyData,
} from '../../../utils/targetStoresData'
import DetailContents from '../DetailContents'

test('rendering Detail header Text', async () => {
  // targetStore toggle이 false일 때 test
  render(<DetailHeader {...nonTargetStoreDummyData} />)
  const nonSelectStoreName = screen.getByText('매장을 선택해주세요', {
    exact: false,
  })

  expect(nonSelectStoreName).toBeInTheDocument()

  // targetStore toggle이 true 일 때 test
  render(<DetailHeader {...targetStoreDummyData} />)

  const storeName = targetStoreDummyData.targetStore.name

  const storeImg = targetStoreDummyData.targetStore.images.map((img) => img)

  const selectedStoreName = screen.getByText('도비네 꽃도리탕', {
    exact: false,
  })

  expect(selectedStoreName).toHaveTextContent(storeName)
  expect(storeImg).toHaveLength(3)
})

test('rendering Detail header Img', async () => {
  render(<DetailContents {...targetStoreDummyData} />)

  const storeImages: HTMLImageElement[] = await screen.findAllByRole('img', {
    name: /store/i,
  })

  const imageAltText = storeImages.map((image) => image.alt)

  expect(imageAltText).toHaveLength(3)
})
