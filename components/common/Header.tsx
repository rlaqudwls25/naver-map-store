import React from 'react'
import Link from 'next/link'
import styles from '../../styles/header.module.scss'
import { IoMdHome } from 'react-icons/io'

interface Props {
  onClickLogo?: () => void
  isElemnet?: React.ReactElement[]
}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link
          href="/"
          className={styles.box}
          onClick={props.onClickLogo}
          aria-label="홈으로 가기"
        >
          <IoMdHome size={20} />
        </Link>
      </div>
      {props.isElemnet && (
        <div className={styles.flexItem}>{props.isElemnet}</div>
      )}
    </header>
  )
}

export default Header
