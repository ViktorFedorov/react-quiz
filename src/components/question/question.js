import React from 'react'
import styles from './question.module.css'

const Question = (props) => {
  const { question, options } = props.question

  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      <div className={styles.buttons}>
        {options.map((answer) => (
          <button className={styles.button} key={answer}>
            {answer}
          </button>
        ))}
      </div>
      <button onClick={() => props.dispatch({ type: 'nextStep' })}>Next</button>
    </div>
  )
}

export default Question
