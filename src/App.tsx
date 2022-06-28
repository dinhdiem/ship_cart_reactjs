import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Website_layout from './pages/layouts/Website_layout/Website_layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Website_layout />}>
          <Route index element={<Home />} />
          <Route path='products'>

          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
