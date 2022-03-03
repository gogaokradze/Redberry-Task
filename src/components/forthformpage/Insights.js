import React, { useContext } from 'react'
import classes from './Insights.module.css'
import FormButton from '../FormButton/FormButton'

import { UserContext } from '../../UserContext'
import { useForm } from 'react-hook-form'




const Insights = () => {
  const { data, setData, setFormIndex } = useContext(UserContext)
  const { register, handleSubmit } = useForm({
    defaultValues: data || {},
  });

  const insights = (submitedData) => {
    setData({ ...data, will_organize_devtalk: submitedData.will_organize_devtalk, devtalk_topic: submitedData.devtalk_topic, something_special: submitedData.something_special })
    setFormIndex((prevState) => prevState += 1
    )
  }

  return (
    <div className={classes.left}>
      <h1>What about you?</h1>
      <form onSubmit={handleSubmit(insights)} className={classes.form}>
        <div className={classes.radio}>
          <p>Would you attend Devtalks and maybe also organize your own?</p>
          <label htmlFor="1">
            <input type="radio" id="1" {...register("will_organize_devtalk")} value={true} />Yes
          </label>
          <label htmlFor="2">
            <input type="radio" id="2" {...register("will_organize_devtalk")} value={false} />no
          </label>
        </div>
        <div>
          <p>What would you speak about at Devtalk?</p>
          <textarea {...register("devtalk_topic")} />
        </div>
        <div>
          <p>Tell us something special</p>
          <textarea {...register("something_special")} />
        </div>
        <FormButton />
      </form>

    </div>
  )
}

export default Insights