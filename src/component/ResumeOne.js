import React from 'react'
import styles from '../component/Reone.module.css'
import resumeSvg from "../assets/resume.svg";
import Body from './Body/Body';
function ResumeOne() {
  return (
    <>
       <div className={styles.container}>
        <div className='row'>

      <div className='col-md-6'>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      </div>
      <div className='col-md-6'>

      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      </div>

      </div>
    </div>
    <Body/>
    </>
  )
}

export default ResumeOne