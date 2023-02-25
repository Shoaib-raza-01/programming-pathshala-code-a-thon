import React, { useState } from 'react'
import medicines from '../DataSets/Medicine'
import MedProduct from './MedProduct'
import Navbar from './Navbar';
import Footer from './Footer';

function Medicins() {
  const [medicine] = useState(medicines)

  return (
    <>
    <Navbar/>
    {medicine.map((Med) => {
      return( 
      <MedProduct
        key={Med.MedId}
        Name={Med.name}
        del = {Med.strike}
        description = {Med.description}
        price = {Med.price}
        count = {Med.count}
        image={Med.medImageUrl} />)
    })}
    <Footer/>
  </>);
}

export default Medicins
