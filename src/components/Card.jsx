import { useEffect, useState } from 'react'
import Favourite from './Favourite'
import { useNavigate } from 'react-router-dom'

const Card = ({ cavernsFiltered }) => {
  const [likes, setLikes] = useState(
    0
    // localStorage.getItem('countfav') ? localStorage.getItem('countfav') : 0
  )

  const navigate = useNavigate()
  useEffect(() => {
    const scrollContainer = document.querySelector('main')

    scrollContainer.addEventListener('wheel', evt => {
      evt.preventDefault()
      scrollContainer.scrollLeft += evt.deltaY
    })
  })

  useEffect(() => {
    console.log('maj like:', likes)
  }, [likes])
  return (
    <div className='card'>
      <main className='main'>
        <section className='card-lg__container'>
          <p className='card__text-sm'>Favoris: {likes} </p>
          <p className='card__text-sm'>Pangée</p>
          <h1 className='card__text-lg'>Grégogrotte</h1>
          <p className='card__text-md'>La caverne qui fait plouf.</p>
          <a href='#' className='card__btn'>
            Découvrir ce trou
          </a>
        </section>

        <section className='card-sm__container'>
          {cavernsFiltered.map(grotto => (
            <div className='card__wrapper_map' key={grotto.id}>
              <section
                className='card-sm'
                style={{ backgroundImage: `url(${grotto.photo})` }}
                onClick={() => navigate(`/detailsgrotte/${grotto.id}`)}
              >
                <p className='card__text-sm'>{grotto.location}</p>
                <h1 className='card__text-lg'>{grotto.name}</h1>
              </section>
              <div className='card__fav'>
                <Favourite likes={likes} setLikes={setLikes} />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Card
