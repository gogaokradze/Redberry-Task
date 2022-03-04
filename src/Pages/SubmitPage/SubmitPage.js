import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import classes from './SubmitPage.module.css'

import { Link } from 'react-router-dom'



const SubmitPage = () => {
  const { setFormIndex } = useContext(UserContext)
  return (
    <div className={classes.background}>
      <Link className={classes.link} to="/Thank-You">Submit</Link>
      <button className={classes.back} onClick={() => setFormIndex((prevState) => prevState -= 1)}>Go Back</button>
    </div>
  )
}

export default SubmitPage