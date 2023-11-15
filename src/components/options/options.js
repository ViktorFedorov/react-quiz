import React from 'react'
import Option from '../option/option'

const Options = ({ options, correctOption, dispatch, points }) => {
  return (
    <>
      {options.map((answer, index) => (
        <Option
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
