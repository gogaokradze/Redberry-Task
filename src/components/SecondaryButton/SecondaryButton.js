import React from 'react'

import classes from '../SecondaryButton/SecondaryButton.module.css'

import {
  Link
} from "react-router-dom";

const SecondaryButton = (props) => {
  return (
    <div className={classes.center}>
      <button className={classes.button} >
        <Link className={classes.link} to='/Submitted-Applications'>{props.children}</Link>
      </button>
    </div>
  )
}

export default SecondaryButton