import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [locationChoice, setLocationChoice] = useState('')
  const [periodChoice, setPeriodChoice] = useState('')
  const [capacityChoice, setCapacityChoice] = useState('')
  const [caverns, setCaverns] = useState([])
  const [cavernsFiltered, setCavernsFiltered] = useState([])

  useEffect(() => {
    const getCaverns = () => {
      axios.get('http://localhost:4402/grottes/').then(res => {
        setCaverns(res.data)
        setCavernsFiltered(res.data)
      })
    }
    getCaverns()
  }, [])

  useEffect(() => {
    getCavernsFiltered()
  }, [locationChoice, periodChoice, capacityChoice])

  const getCavernsFiltered = async () => {
    const result = await caverns
      .filter(cavern =>
        locationChoice ? cavern.location === locationChoice : true
      )
      .filter(cavern => (periodChoice ? cavern.period === periodChoice : true))
      .filter(cavern =>
        capacityChoice ? cavern.capacity === capacityChoice : true
      )
    console.log('result', { result })
    setCavernsFiltered(result)
  }

  return (
    <div className='home'>
      <div className='concept'>
        <p>Faites votre trou pour les vacances</p>
      </div>
      <SearchBar
        locationChoice={locationChoice}
        setLocationChoice={setLocationChoice}
        periodChoice={periodChoice}
        setPeriodChoice={setPeriodChoice}
        capacityChoice={capacityChoice}
        setCapacityChoice={setCapacityChoice}
      />
      <Card cavernsFiltered={cavernsFiltered} />
    </div>
  )
}

export default Home
