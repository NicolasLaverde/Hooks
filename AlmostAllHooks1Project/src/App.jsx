import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputComponent from './components/InputComponent'
import MainPage from './components/MainPage'
import MyApp from './components/HOC'

function App() {
  const secondInputRef = useRef()
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')

  function focusSecondInput () {
    secondInputRef.current.changeFocus()
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My Shopping chart</h1>
      <div className="form">
        <p> Example of useRef, forwardRef && useImperativeHandle ==  </p>
        <p> Click the button and focus the second input</p>
        <InputComponent
          label="First name"
          value={firstName}
          onChange={setFirstName}
        />
        <InputComponent
          label="Second name"
          value={secondName}
          onChange={setSecondName}
          ref={secondInputRef}
        />
        <button onClick={focusSecondInput}>Set focus to second name</button>
      </div>
      <MainPage />
      This is my app
      <MyApp />
    </>
  )
}

export default App
