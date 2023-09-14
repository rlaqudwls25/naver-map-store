import React, { useState } from 'react'
import Feedback, { IFeedbackList } from '../../pages/feedback'
import { createNewFeedback } from './variables'
import FeedbackBoard from './FeedbackBoard'
import styles from '../../styles/feedback.module.scss'
import { useInput } from '../../hooks/useInput'
import FeedbackButton from './FeedbackButton'

const FeedbackSection = ({ initialFeedbackList }: IFeedbackList) => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([
    ...initialFeedbackList,
  ])

  const [newFeedbackText, onChangeNewFeedbackContent, setNewFeedbackContent] =
    useInput()

  console.log('feedbackList', feedbackList)

  return (
    <>
      <div className={styles.feedbackBoardContainer}>
        <FeedbackBoard
          feedbackList={feedbackList}
          newFeedbackText={newFeedbackText}
          onChangeNewFeedbackContent={onChangeNewFeedbackContent}
        />
      </div>
      <FeedbackButton
        newFeedbackText={newFeedbackText}
        setNewFeedbackContent={setNewFeedbackContent}
        setFeedbackList={setFeedbackList}
      />
    </>
  )
}

export default FeedbackSection