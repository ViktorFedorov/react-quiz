import React from 'react'
import styles from './option.module.css'

const Option = ({ answer, correctOption, index, dispatch, points }) => {
  const handleAnswer = () => {
    dispatch({
      type: 'selectOption',
      payload: correctOption === index ? points : 0
    })

    dispatch({ type: 'enable' })

    console.log(index === correctOption)
  }

  return (
    <button className={`${styles.button}`} key={answer} onClick={handleAnswer}>
      {answer}
    </button>
  )
}

export default Option
