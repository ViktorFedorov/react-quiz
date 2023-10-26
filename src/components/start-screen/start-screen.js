import React from 'react'
import styles from './start-screen.module.css'

const StartScreen = ({ questionCount, dispatch }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Welcome to The React Quiz!</h1>
      <p className={styles.text}>
        {questionCount} questions to test your React mastery
      </p>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's start!
      </button>
    </div>
  )
}

export default StartScreen
