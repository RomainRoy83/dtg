import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const Card = () => {
  const [grottos, setGrottos] = useState([])
  const [details, setDetails] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const scrollContainer = document.querySelector('main')

    scrollContainer.addEventListener('wheel', evt => {
      evt.preventDefault()
      scrollContainer.scrollLeft += evt.deltaY
    })
  })

  useEffect(() => {
    axios
      .get('http://localhost:4402/grottes/')
      .then(res => setGrottos(res.data))
  }, [])

  return (
    <div className='card'>
      <main className='main'>
        <section className='card-lg__container'>
          <p className='card__text-sm'>Sierra Desert - Morocco</p>
          <h1 className='card__text-lg'>Marrakech Merzouga</h1>
          <p className='card__text-md'>
            Duis aute irure dolor in reprehenderit in voluptate nulla pariatur.
          </p>
          <a href='#' className='card__btn'>
            Discover Location
          </a>
        </section>

        <section className='card-sm__container'>
          {grottos.map(grotto => (
            <section
              key={grotto.id}
              className='card-sm'
              style={{ backgroundImage: `url(${grotto.photo})` }}
              onClick={() => navigate(`/detailsgrotte/${grotto.id}`)}
            >
              <p className='card__text-sm'>{grotto.location}</p>
              <h1 className='card__text-lg'>{grotto.name}</h1>
            </section>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Card
