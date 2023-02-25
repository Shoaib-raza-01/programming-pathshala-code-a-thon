import React from 'react'
import './Doctor.css'
import {Link} from 'react-router-dom';

function Doctor(props) {
  return (
    <>
      <div className="containers">
        <div className="prodImg">
          <img className='imageDoc' src={props.image} alt="Product" />
        </div>
        <div className="doctorDetails">
          <h1 className='nameTag'>
            {props.Name}
          </h1>
          <p className="description">
            {props.description}
          </p>
          <p className="degree">
            {props.degree}
          </p>
        </div>
        <div className='btn'>
          <Link to='/book'><button className="appointmentBtn">
            Book an Appointment
          </button></Link>
          </div>
      </div>

    </>
  )
}

export default Doctor
