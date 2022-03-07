import React, { useEffect, useContext } from 'react'
import { UserContext } from '../../UserContext'
import classes from './ThankYouPage.module.css'
import { useHistory } from 'react-router-dom'



const ThankYouPage = () => {
  const { setData, setFormIndex } = useContext(UserContext)
  let history = useHistory();

  useEffect(() => {

    setTimeout(() => {
      setData({ skills: [] })
      setFormIndex(0)
      localStorage.removeItem('data')
      history.push('/')
    }, 3000);
  }, [])

  return (
    <div className={classes.background}>
      <h1 className={classes.thanks}>Thanks for Joining 😊</h1>
    </div>
  )
}

export default ThankYouPage