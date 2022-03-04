import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import classes from './ThankYouPage.module.css'


const ThankYouPage = () => {
  const { data } = useContext(UserContext)
  console.log(data)
  return (
    <div className={classes.background}>
      <h1 className={classes.thanks}>Thanks for Joining 😊</h1>
    </div>
  )
}

export default ThankYouPage