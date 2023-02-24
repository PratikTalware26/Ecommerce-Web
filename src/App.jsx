import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import View from './Components/View/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <View/>
    </div>
  )
}

export default App
