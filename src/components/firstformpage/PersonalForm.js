import React, { useContext } from 'react'
import classes from './PersonalForm.module.css'
import FormButton from '../FormButton/FormButton'
import Input from '../input/Input'

import { useForm } from 'react-hook-form'
import { UserContext } from '../../UserContext'

const PersonalForm = () => {
  const { data, setData, setFormIndex } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: data || {},
  });

  const submit = (submitData) => {
    setData({ ...data, firstName: submitData.firstName, lastName: submitData.lastName, email: submitData.email, phoneNumber: submitData.phoneNumber })
    setFormIndex((prevState) => prevState += 1
    )
  }


  // <input className={classes.input} {...register("firstName", {
  //   minLength: {
  //     value: 3,
  //     message: 'error message' // JS only: <p>error message</p> TS only support string
  //   }
  // })} placeholder='First Name' />



  return (
    <div className={classes.left}>
      <h1 className={classes.h1}>Hey, Rocketeer, what are your coordinates?</h1>
      <form className={classes.form} onSubmit={handleSubmit(submit)}>
        <Input register={register} name='firstName' validation={{ required: { value: true, message: 'Please Enter Username' }, minLength: { value: 2, message: 'Minimum Length is 2' } }} errors={errors} placeholder={'First Name'} />
        <Input register={register} name='lastName' validation={{ required: { value: true, message: 'Please Enter Lastname' }, minLength: { value: 2, message: 'Minimum Length is 2' } }} errors={errors} placeholder={'Last Name'} />
        <Input register={register} name='email' validation={{ required: { value: true, message: 'Please Enter E-Mail' }, pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Enter valid email' } }} placeholder={'E-Mail'} errors={errors} />
        <Input register={register} name='phoneNumber' validation={{ required: true }} placeholder={'+995 5_ _ _ _'} errors={errors} />
        <FormButton previous={true} />
      </form>
    </div>
  )
}

export default PersonalForm