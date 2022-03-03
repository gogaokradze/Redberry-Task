import React from 'react'
import classes from './Input.module.css'



const Input = ({ register, name, placeholder, validation, errors }) => {
  return (
    <>
      <input className={classes.input} {...register(name, validation)} placeholder={placeholder} />
      {errors?.[name] && <p className={classes.p}>{errors?.[name]?.message}</p>}

    </>
  )
}

export default Input