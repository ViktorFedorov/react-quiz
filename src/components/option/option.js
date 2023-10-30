import React from 'react'
import styles from './option.module.css'

const Option = ({ answer }) => {
  return (
    <button className={styles.button} key={answer}>
      {answer}
    </button>
  )
}

export default Option
