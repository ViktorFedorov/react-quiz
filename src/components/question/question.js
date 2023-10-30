import React from 'react'
import styles from './question.module.css'
import Options from '../options/options'

const Question = (props) => {
  const { question, options } = props.question

  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      <div className={styles.buttons}>
        <Options options={options} />
      </div>
      <button onClick={() => props.dispatch({ type: 'nextStep' })}>Next</button>
    </div>
  )
}

export default Question
