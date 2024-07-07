import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    
    <div>
      <Router>
        <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
      </Router>
    </div>
    </>
  )
  
}

export default App