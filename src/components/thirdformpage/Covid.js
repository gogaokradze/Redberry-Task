import React, { useContext } from 'react'
import FormButton from '../FormButton/FormButton'
import classes from './covid.module.css'

import { UserContext } from '../../UserContext'
import { useForm } from 'react-hook-form'



const Covid = () => {
  const { data, setData, setFormIndex } = useContext(UserContext)
  const { register, handleSubmit } = useForm({
    defaultValues: data || {},
  });
  const covidInfo = (submitedData) => {
    setData({ ...data, work_preferance: submitedData.work_preferance, had_covid: submitedData.had_covid, had_covid_at: submitedData.had_covid_at, vaccinated: submitedData.vaccinated, vaccinated_at: submitedData.vaccinated_at })
    setFormIndex((prevState) => prevState += 1
    )
  }
  return (
    <>
      <div className={classes.left}>
        <h1 className={classes.h1}>Covid Stuff</h1>
        <form onSubmit={handleSubmit(covidInfo)} className={classes.form}>
          <div className={classes.radio}>
            <p>how would you prefer to work?</p>
            <label htmlFor="from_office">
              <input id="from_office"  {...register("work_preferance")} type="radio" value="from_office" />From Sairme Office
            </label>
            <label htmlFor="from_home">
              <input id="from_home"  {...register("work_preferance")} type="radio" value="from_home" />From Home
            </label>
            <label htmlFor="hybrid">
              <input id="hybrid"  {...register("work_preferance")} type="radio" value="hybrid" />Hybrid
            </label>
          </div>
          <div className={classes.radio}>
            <p>Did you contact covid 19? :(</p>
            <label htmlFor="yes">
              <input type="radio" id="yes" {...register("had_covid")} value="yes" />Yes
            </label>
            <label htmlFor="no">
              <input type="radio" id="no" {...register("had_covid")} value="no" />no
            </label>
          </div>
          <div>
            <p>When?</p>
            <input type="date" {...register('had_covid_at')} />
          </div>
          <div className={classes.radio}>
            <p>Have you been vaccinated?</p>
            <label htmlFor="vaccinated">
              <input type="radio" id="vaccinated" {...register("vaccinated")} value="yes" />Yes
            </label>
            <label htmlFor="unvaccinated">
              <input type="radio" id="unvaccinated" {...register("vaccinated")} value="no" />no
            </label>
          </div>
          <div>
            <p>When did you get your last covid vaccine?</p>
            <input type="date" {...register('vaccinated_at')} />
          </div>

          <FormButton />

        </form>


      </div>
    </>
  )
}

export default Covid