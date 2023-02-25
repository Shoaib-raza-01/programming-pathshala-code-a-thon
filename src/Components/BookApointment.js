import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './BookApointment.css'

const BookApointment = () => {
  const clickHandler = () =>{
      alert("Your appointment was BOOKED SUCCESSFULLY")
  }
  return (
    <div>
      <Navbar/>
      <div className='book-form'>
      <form>
        <lable>
          <p>Name</p>
          <input type="test"/>
        </lable>
        <lable>
          <p>Age</p>
          <input type="number"/>
        </lable>
        <lable>
          <p>select date</p>
          <input type="date"/>
        </lable>
        <lable>
          <p>Select Doctor</p>
          <select name="doctor">
          <option value="Cardiologist">Cardiologist</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="Eye doctor">Eye doctor</option>
          <option value="Gynochologist">Gynochologist</option>
        </select>
        </lable><br/>
        <label>
          <input type='submit' onClick={clickHandler}/>
        </label>
      </form>
      </div>
      <Footer/> 
    </div>
  )
}

export default BookApointment
