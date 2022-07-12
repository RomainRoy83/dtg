import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import React from 'react'

const Header = props => {
  return (
    <div className='navbar'>
      <a href='/'>
        <img className='nav-logo' src={logo} alt='logo' />
      </a>
      <nav className='nav-container'>
        <ul className='nav-liste'>
          <li className='nav-items'>
            <Link to='/'>Accueil</Link>
          </li>
          <li className='nav-items'>
            <Link to='/a-propos'>A propos</Link>
          </li>
          <li className='nav-items'>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li className='nav-items'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
