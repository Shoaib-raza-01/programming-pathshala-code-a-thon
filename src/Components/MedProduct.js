import React from 'react'
import './MedProduct.css'

function MedProduct(props) {
  return (
    <>
      <div className="container">
        <div className="prodImg">
          <img className='imageTag' src={props.image} alt="Product" />
        </div>
        <div className="MedDetails">
          <h1 className='nameTag'>
            {props.Name}
          </h1>
          <p className="paraTag">
            {props.description}
          </p>
          <p className="priceTag">
            Rs. {props.price} 
          </p>
          <p>
            MRP <del>Rs {props.del}</del> 
          </p>
          <p className="countTag">
            Available {props.count}
          </p>
          <button className="buyButton">
            Buy Now
          </button>
        </div>
      </div>

    </>
  )
}

export default MedProduct
