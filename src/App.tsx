import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Website_layout from './pages/layouts/Website_layout/Website_layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Website_layout />}/>
      </Routes>
    </div>
  )
}

export default App
