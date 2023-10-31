import React from 'react'
import styles from './question.module.css'
import Options from '../options/options'

const Question = (props) => {
  const { dispatch } = props
  const { question, options, correctOption, points } = props.question

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
      <button onClick={() => dispatch({ type: 'nextStep' })}>Next</button>
    </div>
  )
}

export default Question
