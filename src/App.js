import { useEffect, useState } from 'react'

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

  const [currentState, setCurrentState] = useState('red')
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentState(STATES[currentState].nextState)
    }, STATES[currentState].timer)
    return () => {
      clearTimeout(timeout)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentState, clicked])

  function handleClick (state) {
    setCurrentState(state)
    setClicked(prev => !prev)
  }

  return (
    <main>
      <h2>Answer to the HackLab Assignment 1</h2>
      <div className='traffic-light'>
        {Object.keys(STATES).map(state => (<button className={state} style={{backgroundColor: currentState === state ? state : 'black'}} key={state} onClick={() => handleClick(state)}></button>))}
      </div>
    </main>
  )
}

export default App
