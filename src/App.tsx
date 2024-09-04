import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { AnimatePresence } from "framer-motion"

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='auth'></Route>
      </Routes>
    </Router>
  )
}

const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <RouterComponent />
    </AnimatePresence>
  )
}

export default App