import React from 'react'
import styles from './header.module.css'
import logo from '../../images/rlogo.svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt='' />
      <h1 className={styles.heading}>The react quiz</h1>
    </div>
  )
}

export default Header
