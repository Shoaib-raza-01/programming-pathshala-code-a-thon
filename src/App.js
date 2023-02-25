import './App.css';
// import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
// import Navbar from './Components/Navbar';
// import Doctor from './Components/Doctor';
import Medicins from './Components/Medicins'
// import BookTest from './Components/BookTest'

import NotFound from './Components/NotFound'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DoctorsPage from './Components/DoctorsPage';
import Test from './Components/Test';
import BookApointment from './Components/BookApointment';
import ProfilePage from './Components/ProfilePage';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/doctor' element={<DoctorsPage/>}/>
      <Route path='/medicins' element={<Medicins/>}/>
      <Route path='/bookTest' element={<Test/>}/>
      <Route path='/login' element={<ProfilePage/>}/>
      <Route path='/book' element={<BookApointment/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
