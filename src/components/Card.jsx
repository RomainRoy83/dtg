import { useEffect, useState } from 'react'

import axios from 'axios'

const Card = () => {
  const [grotto, setGrotto] = useState([])

  useEffect(() => {
    const scrollContainer = document.querySelector('main')

    scrollContainer.addEventListener('wheel', evt => {
      evt.preventDefault()
      scrollContainer.scrollLeft += evt.deltaY
    })
  })

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:4402/grottes/')
  //     .then(res => console.log(res) || setGrotto(res.data))
  // }, [])

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
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1584962356612-f7092400e895?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Tanifa - Spain</p>
            <h1 className='card__text-lg'>Los Lances Beach</h1>
          </section>

          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1489823480956-0204142cfebd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`,
              backgroundPosition: 'center right'
            }}
          >
            <p className='card__text-sm'>Japan Alps</p>
            <h1 className='card__text-lg'>Nagano Prefecture</h1>
          </section>

          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Sierra Nevada - USA</p>
            <h1 className='card__text-lg'>Yosemite National </h1>
          </section>

          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
          <section
            className='card-sm'
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')`
            }}
          >
            <p className='card__text-sm'>Cappadocia - Turkey</p>
            <h1 className='card__text-lg'>Goreme &nbsp; Valley</h1>
          </section>
        </section>
      </main>
    </div>
  )
}

export default Card
