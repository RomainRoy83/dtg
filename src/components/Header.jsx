import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import React from 'react'
import '../assets/scss/_Header.scss'

const Header = () => {
  return (
    <div className='navbar'>
      <nav className='nav-container'>
        <a href='/'>{<img className='nav-logo' src={logo} alt='logo' />}</a>
        <ul className='nav-liste'>
          <li className='nav-items'>
            <Link to='/'>Accueil</Link>
          </li>
          <li className='nav-items'>
            <Link to='/faq'>RAQ</Link>
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
