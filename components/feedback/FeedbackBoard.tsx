import React, { ChangeEvent } from 'react'
import FeedbackInput from './FeedbackInput'
import styles from '../../styles/feedback.module.scss'
import { Feedback } from '../../types/feedback'
import FeedbackList from './FeedbackList'

interface IFeedbackBoardProps {
  feedbackList: Feedback[]
  newFeedbackText?: Feedback['content']
  onChangeNewFeedbackContent?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const FeedbackBoard = ({
  feedbackList,
  newFeedbackText,
  onChangeNewFeedbackContent,
}: IFeedbackBoardProps) => {
  return (
    <div className={styles.feedbackBoard}>
      <FeedbackList feedbackList={feedbackList} />
      {newFeedbackText !== undefined &&
        onChangeNewFeedbackContent !== undefined && (
          <FeedbackInput
            newFeedbackText={newFeedbackText}
            onChangeNewFeedbackContent={onChangeNewFeedbackContent}
          />
        )}
    </div>
  )
}

export default FeedbackBoard
