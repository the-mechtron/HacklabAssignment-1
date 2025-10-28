import { useEffect, useState, useRef } from 'react'



function App () {
  const STATES = {
    red: {
      nextState: 'green',
      timer: 20000
    },
    yellow: {
      nextState: 'red',
      timer: 5000
    },
    green: {
      nextState: 'yellow',
      timer: 15000
    }
  }

  const [currentState, setCurrentState] = useState('asdfasdf')
  const [clicked, setClicked] = useState(true)
  const currentTime = useRef(0

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentState(STATES[currentState]nextState)
    }, STATES[currentState].timer)
    const interval = setInterval(() => {
      currentTime.current.value = parseInt(currentTime.currentvalue) + 1
    }, 1000)
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  / eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentState, clicked])

  function handleClick (state) {
    setCurrentState(prev => {
      currentTime.current.value = parseInt(STATES[state].timer)
      console.log("Here")
      return state
    })
      setClicked(prev => !prev)
  }

  return (
    <main>
      <h2>Answer to the HackLab Assignment 1</h2>
      <div className='traffic-light'>
        {Object.keys(STATES).map(state => (<button className={state} style={{backgroundColor: currentState === state ? state : 'black'}} key={state} onClick={() => handleClick(state)}></button>))}
      </div>
      <div className='timer'>
        <h3>Timer:</h3>
        <input ref={currentTime} value={0} />
      </div>
    </main>
  )
}

export default App
