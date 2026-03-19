import React from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Navbar from './Navbar'
import Header from '../component/Header'
import Home from '../component/Home'
import Footer from '../component/Footer'
import ResumeOne from '../component/ResumeOne'
import ResumeTwo from '../component/ResumeTwo'
import ResumeThree from '../component/ResumeThree'
import Job from '../component/Job'


function Main() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/cvmaker"  element={<Header />} />
        <Route path="/resumeone"  element={<ResumeOne />} />
        <Route path="/resumeTwo"  element={<ResumeTwo />} />
        <Route path="/resumeThree"  element={<ResumeThree />} />
        <Route path="/job"  element={<Job />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Main;