import { render, screen, waitFor } from '@testing-library/react'
import FeedbackButton, { IFeedbackButtonProps } from '../FeedbackButton'
import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil'

test('피드백 등록 버튼을 눌렀을 때 잘 동작하는지 테스트', async () => {
  const feedbackProps: IFeedbackButtonProps = {
    newFeedbackText: 'test',
    setNewFeedbackContent: jest.fn(),
    setFeedbackList: jest.fn(),
  }

  render(<FeedbackButton {...feedbackProps} />, { wrapper: RecoilRoot })

  const createButton = screen.getByRole('button', {
    name: '피드백 등록',
  })

  const createButtonEvent = () => userEvent.click(createButton)

  await createButtonEvent()

  expect(feedbackProps.newFeedbackText).toEqual('test')
})
