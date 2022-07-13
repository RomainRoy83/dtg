import { useState } from 'react'
import { useForm } from 'react-hook-form'
import React from 'react'

export default function Reservation(props) {
  // const {name, location, period, price, id} = props
  const name = 'Laissez moi tranquille' // TEMP
  const location = 'Pangée' // TEMP
  const period = 'Automne' // TEMP
  const id = '2' // TEMP
  const price = '2 chevaux unijambistes' // TEMP
  const { register } = useForm()

  return (
    <div className='form-container'>
      <form
        className='resa-container'
        onSubmit={() => window.alert('Votre réservation est enregistrée :)')}
      >
        <h1 className='resa-title'>Réservez dès maintenant</h1>
        <div className='criterias-container'>
          <p className='resa-criteria'>{name}</p>
          <p className='resa-criteria'>{location}</p>
          <p className='resa-criteria'>{period}</p>
          <p className='resa-criteria'>{price}</p>
        </div>
        <div className='resa-inputs'>
          <label className='firstName'>Prénom</label>
          <input {...register('firstName')} placeholder='Prénom' />
        </div>
        <div className='resa-inputs'>
          <label className='lasstName'>Nom</label>
          <input {...register('lasstName')} placeholder='Nom' />
        </div>

        <label className='claim'>Demande particulière:</label>
        <textarea
          className='resa-text-area'
          {...register('claim')}
          placeholder='Entrez votre demande ici...'
        />
        <button className='resa-button'>Réserver</button>
      </form>
    </div>
  )
}
