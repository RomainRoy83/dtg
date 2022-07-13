import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ cavernsFiltered }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const scrollContainer = document.querySelector('main')

    scrollContainer.addEventListener('wheel', evt => {
      evt.preventDefault()
      scrollContainer.scrollLeft += evt.deltaY
    })
  })

  return (
    <div className='card'>
      <main className='main'>
        <section className='card-lg__container'>
          <p className='card__text-sm'>Pangée</p>
          <h1 className='card__text-lg'>Grégogrotte</h1>
          <p className='card__text-md'>La caverne qui fait plouf.</p>
          <a href='#' className='card__btn'>
            Découvrir ce trou
          </a>
        </section>

        <section className='card-sm__container'>
          {cavernsFiltered.map(grotto => (
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
