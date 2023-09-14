import { Feedback } from '../../types/feedback'

export const createNewFeedback = (
  content: Feedback['content'],
  timestamp: Feedback['timestamp']
) => ({
  content: content ?? '',
  timestamp: timestamp ?? Math.floor(Math.random() * 10 ** 15),
})
