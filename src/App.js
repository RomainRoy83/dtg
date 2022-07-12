import Header from './components/Header'
import CavernDetails from './screens/CavernDetails'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './screens/Home'
import FaqPage from './screens/FaqPage'

function App() {
  const [caverns, setCaverns] = useState([])
  const [cavernsFiltered, setCavernsFiltered] = useState([])

  useEffect(() => {
    const getCaverns = () => {
      axios
        .get('https://sophiel-64.github.io/DTG-dans-ta-grotte-API/api/all.json')
        .then(response => {
          setCaverns(response.data)
          setCavernsFiltered(response.data)
        })
    }
    getCaverns()
  }, [])

  return (
    <div className='App'>
      <Header className='Header' />
      {console.log(cavernsFiltered) ||
        (cavernsFiltered &&
          cavernsFiltered.map(cavern => <h1>{cavern.name}</h1>))}

      <Routes>
        <Route
          path='/'
          element={
            <Home
              caverns={caverns}
              setCaverns={setCaverns}
              cavernsFiltered={cavernsFiltered}
              setCavernsFiltered={setCavernsFiltered}
            />
          }
        />
        <Route path='/faq' element={<FaqPage />} />
      </Routes>
    </div>
  )
}

export default App
// <CavernDetails //* rendre accéssible depuis composant Romain
//   caverns={caverns}
//   setCaverns={setCaverns}
