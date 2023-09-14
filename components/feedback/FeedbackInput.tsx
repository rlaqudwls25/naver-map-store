import React, { ChangeEvent } from 'react'
import styles from '../../styles/feedback.module.scss'
import { Feedback } from '../../types/feedback'

interface IFeedbackInputProps {
  newFeedbackText: Feedback['content']
  onChangeNewFeedbackContent: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const FeedbackInput = ({
  newFeedbackText,
  onChangeNewFeedbackContent,
}: IFeedbackInputProps) => {
  return (
    <div className={`${styles.item} ${styles.inputItem}`}>
      <div
        className={styles.card}
        style={{
          background: `linear-gradient(
                to left top,
                transparent 50%,
                #fdc75f 0
              ) no-repeat 100% 100% / 22px 22px,
              linear-gradient(
                to left top,
                transparent 15.7px,
                #ffe2ab 0
              )`,
        }}
      >
        <textarea
          className={styles.text}
          placeholder="피드백을 적어주세요"
          value={newFeedbackText}
          onChange={onChangeNewFeedbackContent}
        />
        <p className={styles.feedbackInputLenght}>{`${
          newFeedbackText.length
        } / ${80}`}</p>
      </div>
    </div>
  )
}

export default FeedbackInput
