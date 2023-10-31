import React, { useCallback } from 'react'
import { Feedback } from '../../types/feedback'
import styles from '../../styles/feedback.module.scss'
import { createNewFeedback } from './variables'
import { addFeedback } from '../../firebase/feedback'
import { useSetRecoilState } from 'recoil'
import { toastState } from '../../recoil/atom/common'

export interface IFeedbackButtonProps {
  newFeedbackText: string
  setNewFeedbackContent: React.Dispatch<React.SetStateAction<string>>
  setFeedbackList: React.Dispatch<React.SetStateAction<Feedback[]>>
}

const FeedbackButton = ({
  newFeedbackText,
  setNewFeedbackContent,
  setFeedbackList,
}: IFeedbackButtonProps) => {
  const setOpen = useSetRecoilState(toastState)

  const onCreateFeedback = useCallback(
    (newFeedbackText: string) => {
      const newFeedback = createNewFeedback(
        newFeedbackText,
        new Date().getTime()
      )

      setFeedbackList((feedbackList) => [newFeedback, ...feedbackList])

      addFeedback(newFeedback)
      setNewFeedbackContent('')
      setOpen((prev) => !prev)
    },
    [setFeedbackList, setNewFeedbackContent, setOpen]
  )

  return (
    <>
      {newFeedbackText.trim().length !== 0 && (
        <button
          className={styles.submitButton}
          onClick={() => onCreateFeedback(newFeedbackText)}
        >
          피드백 등록
        </button>
      )}
    </>
  )
}

export default FeedbackButton
