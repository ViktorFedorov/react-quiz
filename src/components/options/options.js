import React, { useState } from 'react'
import Option from '../option/option'

const Options = ({ options, correctOption, dispatch, points }) => {
  const [activeClass, setActiveClass] = useState('')

  const setClasses = (correct) => {
    console.log(correct)
  }

  return (
    <>
      {options.map((answer, index) => (
        <Option
          setClasses={setClasses}
          correct={correctOption === index}
          key={answer}
          answer={answer}
          points={points}
          correctOption={correctOption}
          index={index}
          dispatch={dispatch}
        />
      ))}
    </>
  )
}

export default Options
