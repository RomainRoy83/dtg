import { Link } from 'react-router-dom'
import React from 'react'
import facebookImg from '../assets/img/logoReseaux/facebook.png'
import instagramImg from '../assets/img/logoReseaux/instagram2.png'
import '../assets/scss/_Footer.scss'

// import twitterImg from '../assets/img/logoResaux/twitter.png'

const Footer = () => {
  return (
    <footer>
      <div className='footerbody'>
        <div className='footer-logos'>
          <p className='reseaux'>Suivez nous sur nos réseaux :</p>
          <ul className='footer-image'>
            <li>
              <a
                target='_blank'
                href='https://www.facebook.com/'
                rel='noreferrer'
              >
                <img
                  className='footer-logo'
                  src={facebookImg}
                  alt='logo facebook'
                ></img>
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.instagram.com/?hl=fr'
                rel='noreferrer'
              >
                <img
                  className='footer-logo'
                  src={instagramImg}
                  alt='logo instagram'
                ></img>
              </a>
            </li>
          </ul>
        </div>
        <p className='copyright'>© 2022 D.T.G Inc.</p>
        <ul className='footer-liste'>
          <li className='footer-items'>
            <Link to='/'></Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
