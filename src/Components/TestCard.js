import React from 'react'
import { Link } from 'react-router-dom'

function TestCard(props) {
  return (
    <>
      <div className="containers">
        <div className="prodImg">
          <img className='imageDoc' src={props.image} alt="Product" />
        </div>
        <div className="testDetails">
          <h1 className='nameTag'>
            {props.name}
          </h1>
          <p className="description">
            {props.desc}
          </p>
          <p className="degree">
            {props.price}
          </p>
        </div>
        <div className='btn'>
          <Link to='/book'><button className="appointmentBtn">
            Book an Test
          </button></Link>
          </div>
      </div> 
    </>
  )
}

export default TestCard
