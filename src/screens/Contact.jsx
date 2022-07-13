import React from 'react'
import '../assets/scss/_Contact.scss'
import Contactbb from '../assets/img/Contact.png'

const Contact = () => {
  return (
    <div className='container-contact'>
      <div className='contact-box'>
        <img src={Contactbb} className='left'></img>
        <div className='right'>
          <h2 className='titre2-contact'>Contactez-nous!</h2>
          <div>
            <input
              placeholder='Votre nom'
              className='field-contact'
              type='text'
            />
          </div>
          <div>
            <input
              placeholder='Votre prénom'
              className='field-contact'
              type='text'
            />
          </div>
          <div>
            <input
              placeholder='Votre e-mail'
              className='field-contact'
              type='text'
            />
          </div>
          <div>
            <textarea
              placeholder='Votre message ici'
              className='field-contact'
            />
          </div>
          <button className='bouton-contact'>Envoyer</button>
        </div>
      </div>
    </div>
  )
}
export default Contact
