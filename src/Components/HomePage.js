import React from 'react'
import './HomePage.css'
import img from './images/bannerHealth.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div className='home-banner'>
        <div className='moto'><h1>FIND YOUR DOCTORS<br/>AND MAKE YOUR APPOINTMENT</h1></div>
        <div className='banner-img'><img src={img} alt='banner' width='500px' height='400px'/></div>
        <div className='back-banner'></div>

      </div>
      <div className='home-second'>
        <div className='wrap-container'>
          <Link to='/doctor'><div className='special-box'>
            <img src='https://img.freepik.com/premium-vector/health-doctor-search-logo-design-inspiration_347382-650.jpg?w=2000' alt=''/>
            <p>Search Doctor</p>
            </div></Link>
          <Link to=''><div className='special-box'>
          <img src="https://www.nicepng.com/png/detail/9-94335_location-icon-location-icon-png-blue.png" alt=''/>
            <p>YourHealth Location</p>
            </div></Link>
          <Link to="book"><div className='special-box'>
          <img src="https://i.pinimg.com/474x/56/dd/e7/56dde739b6c9a2cb172df3031e497f88.jpg" alt=''/>
            <p>Schedule Appointments</p>
            </div></Link>
          <Link to='chat'><div className='special-box'>
          <img src="https://cdn2.vectorstock.com/i/1000x1000/81/01/tech-lightbulb-digital-solutions-logo-designs-vector-27548101.jpg" alt=''/>
            <p>Get Your Solution</p>
            </div></Link>
        </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default HomePage
