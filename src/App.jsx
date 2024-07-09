import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/index'
function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => { 
    setCount(count + 5);
  }

  return (
    <>
      <>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo logo-vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo logo-react" alt="React logo" />
        </a>
      </>
    

      <Count count={count} incrementCount={incrementCount}/>
    </>
  )
}

export default App
