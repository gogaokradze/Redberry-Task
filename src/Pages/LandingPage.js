import React from 'react'
import classes from './LandingPage.module.css'

import rocketman from '../images/rocketman.png'


import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton/SecondaryButton'

const LandingPage = () => {
  return (
    <main className={classes.background}>
      <div className={classes.bgImage}>
        <h1 className={classes.welcome}>Welcome Rocketeer !</h1>

        <PrimaryButton to={'/questionnaire'} >Start Questionnaire</PrimaryButton>

        <SecondaryButton>Submitted Applications</SecondaryButton>

        <img src={rocketman} alt='rocketman' className={classes.rocketman} />

      </div>
    </main>
  )
}

export default LandingPage