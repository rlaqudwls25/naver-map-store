import React from 'react'
import Link from 'next/link'
import styles from '../../styles/header.module.scss'
import Image from 'next/image'

interface Props {
  onClickLogo: () => void
  isElemnet?: React.ReactElement[]
}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box} onClick={props.onClickLogo}>
          <Image
            src="https://lecture-1.vercel.app/inflearn.png"
            alt="로고"
            width={110}
            height={20}
          />
        </Link>
      </div>
      {props.isElemnet && (
        <div className={styles.flexItem}>{props.isElemnet}</div>
      )}
    </header>
  )
}

export default Header
