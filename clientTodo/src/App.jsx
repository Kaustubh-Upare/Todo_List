import { useState } from 'react'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import './App.css'
import Home from './page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/Todo' element={<Home />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
