import CavernDetails from './screens/CavernDetails'
import { Routes, Route } from 'react-router-dom'

import Home from './screens/Home'
import FaqPage from './screens/FaqPage'

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
