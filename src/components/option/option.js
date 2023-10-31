import React from 'react'
import styles from './option.module.css'

const Option = ({
  answer,
  correctOption,
  index,
  dispatch,
  points,
  correct,
  setClasses
}) => {
  const handleAnswer = () => {
    dispatch({
      type: 'selectOption',
      payload: correctOption === index ? points : 0
    })

    setClasses(correct)
  }

  return (
    <button className={`${styles.button}`} key={answer} onClick={handleAnswer}>
      {answer}
    </button>
  )
}

export default Option
