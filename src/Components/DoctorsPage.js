import React, { useState } from 'react'
import doctors from '../DataSets/DoctorDataset'
import Doctor from './Doctor'
import Navbar from './Navbar';
import Footer from './Footer';

function DoctorsPage() {
  const [doctor, setDoctor] = useState(doctors)
  return (
    <>
    <Navbar/>
    {doctor.map((Doc) => {
      return <Doctor
        key={Doc.id}
        Name={Doc.name}
        description = {Doc.description}
        degree = {Doc.degree}
        // count = {Med.count}
        image={Doc.doctorImageUrl} />
    })}
    <Footer/>
  </>);
}

export default DoctorsPage
