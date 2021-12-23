import React from 'react'
import { Link } from 'react-router-dom';
import Styles from './Header.module.css'

const Header = () => {
  return (
    <div className={ Styles.header }>
      <nav className='container'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login/Criar</Link>
      </nav>
    </div>
  )
}

export default Header;
