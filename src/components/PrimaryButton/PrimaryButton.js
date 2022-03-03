import React from 'react'
import classes from './PrimaryButton.module.css'

import {
  Link
} from "react-router-dom";

const PrimaryButton = (props) => {
  return (
    <div className={classes.center}>
      <button className={classes.button}>
        <Link className={classes.link} to='/questionnaire'>{props.children}</Link>
      </button>
    </div>

  )
}

export default PrimaryButton