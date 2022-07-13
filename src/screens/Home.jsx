import { useEffect, useState } from 'react'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import Reservation from '../components/Reservation'

const Home = props => {
  const { caverns, setCaverns, cavernsFiltered, setCavernsFiltered } = props
  const [locationChoice, setLocationChoice] = useState('')
  const [periodChoice, setPeriodChoice] = useState('')
  const [capacityChoice, setCapacityChoice] = useState('')

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
    setCavernsFiltered(result)
  }

  return (
    <div className='home'>
      {console.log(cavernsFiltered) ||
        (cavernsFiltered &&
          cavernsFiltered.map(cavern => <h1>{cavern.name}</h1>))}
      <h1> Poulet Home </h1>
      <SearchBar // à déplacer dans le Header
        locationChoice={locationChoice} // à déplacer dans le Header
        setLocationChoice={setLocationChoice} // à déplacer dans le Header
        periodChoice={periodChoice} // à déplacer dans le Header
        setPeriodChoice={setPeriodChoice} // à déplacer dans le Header
        capacityChoice={capacityChoice} // à déplacer dans le Header
        setCapacityChoice={setCapacityChoice} // à déplacer dans le Header
      />
      <Card />
    </div>
  )
}

export default Home
