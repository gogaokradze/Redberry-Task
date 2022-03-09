import React, { useContext, useEffect, useRef } from 'react'
import classes from './Insights.module.css'
import FormButton from '../FormButton/FormButton'

import { UserContext } from '../../UserContext'
import { useForm } from 'react-hook-form'




const Insights = () => {
  const { data, setData, setFormIndex } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors }, getValues, watch } = useForm({
    defaultValues: data || {},
  });

  const insights = (submitedData) => {
    setData({ ...data, will_organize_devtalk: submitedData.will_organize_devtalk, devtalk_topic: submitedData.devtalk_topic, something_special: submitedData.something_special })
    setFormIndex((prevState) => prevState += 1
    )
  }
  const forward = useRef(null);
  const backward = useRef(null);


  const keypress = (e) => {
    if (e.keyCode === 39) forward.current.click()
    if (e.keyCode === 37) backward.current.click()
  }

  useEffect(() => {
    window.addEventListener('keydown', keypress)
    return () => {
      setData({ ...data, will_organize_devtalk: getValues().will_organize_devtalk, devtalk_topic: getValues().devtalk_topic, something_special: getValues().something_special })
      window.removeEventListener('keydown', keypress)

    }
  }, [])


  return (
    <div className={classes.left}>
      <h1 className={classes.h1}>What about you?</h1>
      <form onSubmit={handleSubmit(insights)} className={classes.form}>
        <div className={classes.formsize}>
          <div className={`${classes.div} ${classes.radio}`}>
            <p className={classes.p} >Would you attend Devtalks and maybe also organize your own?</p>
            <label className={classes.label} htmlFor="1">
              <input type="radio" id="1" {...register("will_organize_devtalk", { required: true })} value={true} />Yes
            </label>
            <label className={classes.label1} htmlFor="2">
              <input type="radio" id="2" {...register("will_organize_devtalk", { required: true })} value={false} />no
            </label>
          </div>
          {watch().will_organize_devtalk === 'true' && (
            <div className={classes.div}>
              <p className={classes.devtalk}>What would you speak about at Devtalk?</p>
              <textarea className={classes.textarea1} {...register("devtalk_topic", { required: true })} placeholder="I would..." />
            </div>
          )}
          <div className={classes.div}>
            <p className={classes.devtalk}>Tell us something special</p>
            <textarea className={classes.textarea2} {...register("something_special", { required: true })} placeholder="I..." />
          </div>
          {Object.keys(errors).length > 0 && (<div className={classes.div}><p className={classes.errorMessage}>`*please fill out the form</p></div>)}
        </div>
        <FormButton forwardref={forward} backwardref={backward} />
      </form >

    </div >
  )
}

export default Insights