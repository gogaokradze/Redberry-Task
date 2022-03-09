import React, { useContext, useEffect } from 'react'
import classes from './PersonalForm.module.css'
import FormButton from '../FormButton/FormButton'
import Input from '../Input/Input'

import { useForm } from 'react-hook-form'
import { UserContext } from '../../UserContext'

const PersonalForm = () => {
  const { data, setData, setFormIndex } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: data || {},
  })

  const submit = submitData => {
    setData({
      ...data,
      firstName: submitData.firstName,
      lastName: submitData.lastName,
      email: submitData.email,
      phoneNumber: submitData.phoneNumber,
    })
    setFormIndex(prevState => (prevState += 1))
  }
  useEffect(() => {
    return () => {
      setData({
        ...data,
        firstName: getValues().firstName,
        lastName: getValues().lastName,
        email: getValues().email,
        phoneNumber: getValues().phoneNumber,
      })
    }
  }, [])

  return (
    <div className={classes.left}>
      <h1 className={classes.h1}>Hey, Rocketeer, what are your coordinates?</h1>
      <form className={classes.form} onSubmit={handleSubmit(submit)}>
        <div className={classes.formsize}>
          <Input
            register={register}
            name='firstName'
            validation={{
              required: { value: true, message: 'first name is required' },
              minLength: {
                value: 2,
                message: 'first name should include 2 or more characters',
              },
            }}
            errors={errors}
            placeholder={'First Name'}
          />
          <Input
            register={register}
            name='lastName'
            validation={{
              required: { value: true, message: 'last name is required' },
              minLength: {
                value: 2,
                message: 'last name should include 2 or more characters',
              },
            }}
            errors={errors}
            placeholder={'Last Name'}
          />
          <Input
            register={register}
            name='email'
            validation={{
              required: { value: true, message: 'email is required' },
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: 'enter valid email',
              },
            }}
            placeholder={'E Mail'}
            errors={errors}
          />
          <Input
            register={register}
            name='phoneNumber'
            validation={{
              pattern: {
                value: /[+]\s?[9][9][5]\s?[5]\d{2}\s?\d\d\s?\d\s?\d\s?\d\d$/,
                message: 'enter Georgian phone number',
              },
            }}
            placeholder={'+995 5_ _ _ _'}
            errors={errors}
          />
        </div>
        <FormButton previous={true} />
      </form>
    </div>
  )
}

export default PersonalForm
