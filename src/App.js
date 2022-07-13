import Header from './components/Header'
import Footer from './components/Footer'
import CavernDetails from './screens/CavernDetails'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './screens/Home'
import FaqPage from './screens/FaqPage'
import Contact from './screens/Contact'
import Reservation from './components/Reservation'

function App() {
  return (
    <div className='App'>
      <Header className='Header' />
      {console.log(cavernsFiltered) ||
        (cavernsFiltered &&
          cavernsFiltered.map(cavern => <h1>{cavern.name}</h1>))}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/detailsgrotte/:id' element={<CavernDetails />} />
      </Routes>
      <Footer className='footer' />
    </div>
  )
}

export default App
