import React from 'react'
import {Link} from 'react-router-dom'
import Resume from '../assets/Resume.png'
import ResumeSecond from '../assets/resumeSecond.png'
import ResumeThree from '../assets/ResumeThree.png'
import './styleCv.css'
function Header() {
  return (
    <>
        <div className='bgResume'>
              <div className='overLayCv'>
                    <div className='container'>
                        <div className='row '>
                          <div className='col-md-4 mt-5'>
                              <div className="card" style={{width: '22.7rem'}}>
                                <Link to="/resumeone">
                                  <img className="card-img-top" src={Resume} alt="Cardimagecap"/>
                                </Link>
                            </div>
                          </div>
                          <div className='col-md-4 mt-5'>
                              <div className="card" style={{width: '22.7rem'}}>
                                <Link to="/resumeTwo">
                              <img className="card-img-top" src={ResumeSecond} alt="Cardimagecap"/>
                                </Link>
                            
                            </div>
                          </div>
                          <div className='col-md-4 mt-5'>
                              <div className="card" style={{width: '22.7rem'}}>
                                <Link to="/resumeThree">
                              <img className="card-img-top" src={ResumeThree} alt="Cardimagecap"/>
                                </Link>
                           
                            </div>
                          </div>
                        </div>
                    </div>
              </div>
        </div>
    </>
  )
}

export default Header