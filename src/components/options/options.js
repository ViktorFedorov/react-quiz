import React from 'react'
import Option from '../option/option'

const Options = ({ options }) => {
  return (
    <>
      {options.map((answer) => (
        <Option answer={answer} />
      ))}
    </>
  )
}

export default Options
