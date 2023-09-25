import React, { useState } from 'react'
import Feedback, { IFeedbackList } from '../../pages/feedback'
import FeedbackBoard from './FeedbackBoard'
import styles from '../../styles/feedback.module.scss'
import { useInput } from '../../hooks/useInput'
import FeedbackButton from './FeedbackButton'
import ToastMessage from '../common/ToastMessage'

const FeedbackSection = ({ initialFeedbackList }: IFeedbackList) => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([
    ...initialFeedbackList,
  ])

  const [newFeedbackText, onChangeNewFeedbackContent, setNewFeedbackContent] =
    useInput('')

  return (
    <>
      <ToastMessage message="피드백이 등록되었습니다." />
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
