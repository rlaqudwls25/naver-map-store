import React from 'react'
import { Feedback } from '../../types/feedback'
import styles from '../../styles/feedback.module.scss'

interface IFeedbackListProps {
  feedbackList: Feedback[]
}

const FeedbackList = ({ feedbackList }: IFeedbackListProps) => {
  return (
    <div>
      {feedbackList.map((list, index) => {
        return (
          <div className={styles.item} key={index}>
            <div className={styles.card}>
              <p className={styles.text}>{list.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FeedbackList
