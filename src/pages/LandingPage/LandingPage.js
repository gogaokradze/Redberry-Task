import React from 'react'
import classes from './LandingPage.module.css'

import rocketman from '../../images/rocketman.png'

import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <main className={classes.background}>
      <div className={classes.bgImage}>
        <h1 className={classes.welcome}>Welcome Rocketeer !</h1>
        <div className={classes.center}>
          <Link className={classes.start} to='/questionnaire'>
            Start Questionnaire
          </Link>
          <Link className={classes.submitted} to='/submitted-applications'>
            Submitted Applications
          </Link>
        </div>

        <div className={classes.img}>
          <img src={rocketman} alt='rocketman' className={classes.rocketman} />
        </div>
      </div>
    </main>
  )
}

export default LandingPage
