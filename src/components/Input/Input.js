import classes from './Input.module.css'

const Input = ({ register, name, placeholder, validation, errors, type, className }) => {
  return (
    <>
      <input className={`${classes.input} ${className}`} type={type} {...register(name, validation)} placeholder={placeholder} />
      {errors?.[name] && <p className={classes.p}>*{errors?.[name]?.message}</p>}
    </>
  )
}

export default Input