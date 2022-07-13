import { useForm } from 'react-hook-form'
import React, { useState } from 'react'

export default function Reservation(props) {
  const { cavern } = props

  const { register } = useForm()

  return (
    <div className='form-container'>
      <form
        className='resa-container'
        onSubmit={() => window.alert('Votre réservation est enregistrée :)')}
      >
        <h1 className='resa-title'>Réservez dès maintenant</h1>
        <div className='resaGlobal'>
          <div className='criterias-container'>
            <p className='resa-criteria'>{cavern.name}</p>
            <p className='resa-criteria'>{cavern.location}</p>
            <p className='resa-criteria'>{cavern.period}</p>
            <p className='resa-criteria'>{cavern.price}</p>
          </div>
          <div className='userInput'>
            <div className='personInfo'>
              <div className='resa-inputs'>
                <label className='firstName'>Prénom</label>
                <input {...register('firstName')} placeholder='Prénom' />
              </div>
              <div className='resa-inputs'>
                <label className='lastName'>Nom</label>
                <input {...register('lastName')} placeholder='Nom' />
              </div>
            </div>
            <div className='request'>
              <label className='claim'>Demande particulière:</label>
              <textarea
                className='resa-text-area'
                {...register('claim')}
                placeholder='Entrez votre demande ici...'
              />
            </div>
          </div>
        </div>
        <button className='resa-button'>Réserver</button>
      </form>
    </div>
  )
}
