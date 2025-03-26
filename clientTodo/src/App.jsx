import { useState } from 'react'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import {Toaster} from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/Todo' element={<Home />} />
      </Routes>

      <Toaster position='bottom-center' />

    </Router>

    </>
  )
}

export default App
