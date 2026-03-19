import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <>
        <div className='heroImage'>
            <div className='overlayImage'>
                <div className='brandingText'>
                    <div className='welComeText'>
                        <h1>Build Your Professional Resume</h1>
                        <p>Your resume describes your qualifications and what makes you unique. To stand out among other applicants, you need a resume that markets your strengths and match for the job. </p>
                        <center><Link to='/cvmaker' className='btn btn-success button'>Create Resume</Link></center>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home