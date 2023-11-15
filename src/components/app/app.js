import Header from '../header/header'
import Main from '../main/main'
import React, { useEffect, useReducer } from 'react'
import Loader from '../loader/loader'
import Error from '../error/error'
import Question from '../question/question'
import StartScreen from '../start-screen/start-screen'

const initState = {
  questions: [],
  status: 'loading',
  currentQuestion: 0,
  points: 0,
  userAnswer: null,
  nextButtonVisible: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      }
    case 'start':
      return {
        ...state,
        status: 'active'
      }
    case 'nextStep':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      }
    case 'selectOption':
      return {
        ...state,
        points: state.points + action.payload
      }
    case 'enable':
      return {
        ...state,
        nextButtonVisible: true
      }
    case 'disable':
      return {
        ...state,
        nextButtonVisible: false
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    const getQuestions = async () => {
      const res = await fetch(`http://localhost:8000/questions`)
      const data = await res.json()

      dispatch({ type: 'dataReceived', payload: data })
    }

    getQuestions()
  }, [])

  return (
    <div className='App'>
      <Header />

      <Main>
        {state.status === 'loading' && <Loader />}
        {state.status === 'error' && <Error />}
        {state.status === 'ready' && (
          <StartScreen
            questionCount={state.questions.length}
            dispatch={dispatch}
          />
        )}
        {state.status === 'active' && (
          <Question
            question={state.questions[state.currentQuestion]}
            dispatch={dispatch}
            nextButtonVisible={state.nextButtonVisible}
          />
        )}
      </Main>
    </div>
  )
}

export default App
