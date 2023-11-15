import React from 'react'
import styles from './question.module.css'
import Options from '../options/options'

const Question = (props) => {
  const { dispatch, nextButtonVisible } = props
  const { question, options, correctOption, points } = props.question

  const handleClickButton = () => {
    dispatch({ type: 'nextStep' })
    dispatch({ type: 'disable' })
  }

  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      <div className={styles.buttons}>
        <Options
          options={options}
          points={points}
          correctOption={correctOption}
          dispatch={dispatch}
        />
      </div>
      <div className={styles.footer}>
        <p className={styles.timer}>10:99</p>
        {nextButtonVisible && (
          <button onClick={handleClickButton} className={styles.next}>
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default Question
