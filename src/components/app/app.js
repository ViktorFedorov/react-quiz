import Header from '../header/header'
import Main from '../main/main'
import React, { useEffect, useReducer } from 'react'

const initState = {
  question: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'load':
      return [...action.payload]
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer)

  useEffect(() => {
    const getQuestions = async () => {
      const res = await fetch(`http://localhost:8000/questions`)
      const data = await res.json()
      dispatch({ type: 'load', payload: data })
    }

    getQuestions()
  }, [])

  console.log(state)

  return (
    <div className='App'>
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  )
}

export default App
