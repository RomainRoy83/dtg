import CavernDetails from './screens/CavernDetails'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './screens/Home'
import FaqPage from './screens/FaqPage'
import Reservation from './components/Reservation'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/detailsgrotte/:id' element={<CavernDetails />} />
      </Routes>
    </div>
  )
}

export default App
