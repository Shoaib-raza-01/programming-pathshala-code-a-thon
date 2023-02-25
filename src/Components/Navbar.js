import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Logo from './images/logo.jpg'

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
      <div className='Nav'>
        <div className='nav-left'>
          <Link to='/'><img src={Logo} alt='logo' width='50px' height='50px'/></Link>
        </div>
        <div className='nav-center'>
          <Link to='/doctor'><button className='doctor'>DOCTORS</button></Link>
          <Link to='/medicins'><button className='medicins'>MEDICINES</button></Link>
          <Link to='/bookTest'><button className='diagnosis'>BOOK TEST</button></Link>
        </div>
        <div className='nav-right'>
          <Link to='/login'><button className='login'>User</button></Link>
        </div>
      </div>
      </div>      
    </div>
  )
}

export default Navbar
