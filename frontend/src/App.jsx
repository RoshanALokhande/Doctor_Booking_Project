import { Route,Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MyAppoinment from './pages/MyAppoinment.jsx'
import MyProfile from './pages/MyProfile.jsx'
import Login from './pages/Login.jsx'
import Doctors from './pages/Doctors.jsx'
import Appoinment from './pages/Appoinment.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/footer.jsx'


  import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer></ToastContainer>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/doctors' element={<Doctors></Doctors>}/>
        <Route path='/doctors/:speciality' element={<Doctors></Doctors>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/my-profile' element={<MyProfile></MyProfile>}/>
        <Route path='/my-appoinments' element={<MyAppoinment></MyAppoinment>}/>
        <Route path='/appoinment/:docId' element={<Appoinment></Appoinment>}/>

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App