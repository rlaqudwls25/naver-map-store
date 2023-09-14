import React, { useEffect } from 'react'
import styles from '../../styles/toastMessage.module.scss'
import { toastState } from '../../recoil/atom/common'
import { useRecoilState, useRecoilValue } from 'recoil'

interface IToastMessageProps {
  message: string
}

const ToastMessage = ({ message }: IToastMessageProps) => {
  const [open, setOpen] = useRecoilState(toastState)

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen((prev) => !prev)
      }, 3000)
    }
  }, [open, setOpen])

  return (
    <>
      {open && (
        <div
          className={`${styles.messageContainer} ${open ? styles.show : ''}`}
        >
          <div className={styles.messageWrapper}>
            <span>{message}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default ToastMessage
