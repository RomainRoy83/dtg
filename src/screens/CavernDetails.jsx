import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Reservation from '../components/Reservation'

import axios from 'axios'

const CavernDetails = () => {
  const [cavern, setCavern] = useState()

  const { id } = useParams()

  useEffect(() => {
    const getCavern = () => {
      axios.get(`http://localhost:4402/grottes/${id}`).then(response => {
        setCavern(response.data)
      })
    }
    getCavern()
  }, [])

  return (
    <div className='cavernDetails'>
      {cavern && (
        <>
          <p>Détails de la grotte</p>
          <div className='cavernDetails'>
            <img
              className='detailsPhoto'
              src={cavern.photo}
              alt={cavern.name}
            ></img>
            <h1 className='cavernName'>{cavern.name}</h1>
            <p>Type : {cavern.capacity}</p>
            <p>{cavern.description1}</p>
            <p className='detailsDescription'>{cavern.description2}</p>
            <p>Prix : {cavern.price}</p>
          </div>
          <Reservation id={id} cavern={cavern} />
        </>
      )}
    </div>
  )
}

export default CavernDetails
