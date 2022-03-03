import React from 'react'
import classes from './RedberryStories.module.css'

const RedberryOrigins = (props) => {
  return (
    <div className={classes.right}>
      <h1 className={classes.h1}>{props.title}</h1>
      <p className={classes.p}>{props.body}</p>
    </div>
  )
}

export default RedberryOrigins