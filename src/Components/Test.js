import React, { useState } from 'react'
import tests from '../DataSets/Dignostics'
import TestCard from './TestCard'
import Navbar from './Navbar'
import Footer from './Footer'

function Test() {
  const [test, setTest] = useState(tests)
  return (<>
  <Navbar/>
   { test.map((check) =>{
      return <TestCard 
      key={check.testId}
      name = {check.testName}
      desc = {check.description}
      price = {check.price}
      image = {check.testImageUrl}
      />
    })}
    <Footer/>
  </>)
}

export default Test
