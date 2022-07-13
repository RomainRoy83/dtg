import { useParams, Link } from 'react-router-dom'
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
          <div className='grottoDetails'>
            <img
              className='detailsPhoto'
              src={cavern.photo}
              alt={cavern.name}
            />
            <div className='cavernResa'>
              <div className='cavernInfo'>
                <div className='infoHeader'>
                  <h1 className='cavernName'>{cavern.name}</h1>
                  <h2 className='cavernType'>Type : {cavern.capacity}</h2>
                  <p className='cavernDescription'>{cavern.description1}</p>
                </div>
                <div className='line'></div>
                <p className='detailsDescription'>{cavern.description2}</p>
                <div className='line'></div>
                <p className='cavernPrice'>Prix : {cavern.price}/nuit</p>
                <Link to='/' className='backLink'>
                  <button className='back'>
                    Revenir à la liste des cavernes
                  </button>
                </Link>
              </div>
              <Reservation id={id} cavern={cavern} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CavernDetails
