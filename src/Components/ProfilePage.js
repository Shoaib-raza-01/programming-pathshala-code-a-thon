import React from 'react'
import profile from './images/profile.jpg'
import './ProfilePage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function ProfilePage() {
  return (
    <>
    <Navbar/>
      <div className="information">
        <div className="profileImage">
          <img className='ProfileImage' src={profile} alt="ProfilePic" />
        </div>
        <div className="details">
          <div id='name'>
            <h2>Name :</h2>
            <p className="name">User Name</p>
          </div>
          <div id="age">
            <h2>Age :</h2>
            <p className="age">32</p>
          </div>
          <div id="bloodGro">
            <h2>Blood Group :</h2>
            <p className="bloodGroup">B+</p>

          </div>
          <div id="address">
          <h2>Address : </h2>
          <p className="address">Chaudhary Bhavan, Road-16, Kisan Nagar 1, Wagale Estate, Thane (west)</p>
          </div>
        </div>
        <div className="btn">
          <Link to='/book' ><button className="book">Book Instantly</button></Link>
        </div>
      </div>
      <div className="history">
        <div className="previousTests">
          <h2 className='heading'>PREVIOUS APPOINTMENTS</h2>
            <p className="noData">No Data Found</p>
        </div>
        <div className="upcommingTests">
          <h2 className='heading'>UPCOMMING APPOINTMENTS</h2>
          <p className="noData">No Data Found</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ProfilePage
