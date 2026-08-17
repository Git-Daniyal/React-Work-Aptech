import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import { BrowserRouter,Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App