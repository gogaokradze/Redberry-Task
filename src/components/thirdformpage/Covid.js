import React, { useContext, useState, useEffect } from 'react'
import FormButton from '../FormButton/FormButton'
import classes from './covid.module.css'

import { UserContext } from '../../UserContext'
import { useForm } from 'react-hook-form'
import { Calendar } from '../../svg/icons'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





const Covid = () => {
  const { data, setData, setFormIndex } = useContext(UserContext)
  const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm({
    defaultValues: data || {},
  });

  const [startDate, setStartDate] = useState();
  const [startDate2, setStartDate2] = useState()

  useEffect(() => {

    return () => {
      setData({ ...data, work_preferance: getValues().work_preferance, had_covid: getValues().had_covid, had_covid_at: startDate2?.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })?.replaceAll('/', '-'), vaccinated: getValues().vaccinated, vaccinated_at: startDate?.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })?.replaceAll('/', '-') })
    }
  }, [])


  const covidInfo = (submitedData) => {
    setData({ ...data, work_preferance: submitedData.work_preferance, had_covid: submitedData.had_covid, had_covid_at: startDate2?.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })?.replaceAll('/', '-'), vaccinated: submitedData.vaccinated, vaccinated_at: startDate?.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })?.replaceAll('/', '-') })
    setFormIndex((prevState) => prevState += 1
    )
  }


  // {document.querySelector('#yes').checked === true && <p>pranked haha</p>}
  return (
    <>
      <div className={classes.left}>
        <h1 className={classes.h1}>Covid Stuff</h1>
        <form onSubmit={handleSubmit(covidInfo)} className={classes.form}>
          <div className={classes.radio}>
            <p className={classes.p}>how would you prefer to work?</p>
            <label htmlFor="from_office">
              <input id="from_office"  {...register("work_preferance", { required: { value: true, message: 'please fill out the form' } })} type="radio" value="from_office" />From Sairme Office
            </label>
            <label htmlFor="from_home">
              <input id="from_home"  {...register("work_preferance")} type="radio" value="from_home" />From Home
            </label>
            <label htmlFor="hybrid">
              <input id="hybrid"  {...register("work_preferance")} type="radio" value="hybrid" />Hybrid
            </label>
          </div>
          <div className={classes.radio}>
            <p className={classes.p}>Did you contact covid 19? :(</p>
            <label htmlFor="yes">
              <input type="radio" id="yes" {...register("had_covid", { required: { value: true, message: 'please fill out the form' } })} value={true} />Yes
            </label>
            <label htmlFor="no">
              <input type="radio" id="no" {...register("had_covid")} value={false} />no
            </label>
          </div>
          {watch().had_covid === 'true' && (
            <div className={classes.hiddenDate}>
              <p>When?</p>
              <DatePicker
                className={classes.date}
                closeOnScroll={true}
                selected={startDate2}
                required
                placeholderText={'Date'}
                onChange={(date) => setStartDate2(date)}
              />
              <Calendar className={classes.calendarButton} />
            </div>
          )}
          <div className={classes.radio}>
            <p className={classes.p}>Have you been vaccinated?</p>
            <label htmlFor="vaccinated">
              <input type="radio" id="vaccinated" {...register("vaccinated", { required: { value: true, message: 'please fill out the form' } })} value={true} />Yes
            </label>
            <label htmlFor="unvaccinated">
              <input type="radio" id="unvaccinated" {...register("vaccinated")} value={false} />no
            </label>
          </div>
          {watch().vaccinated === 'true' && (
            <div className={classes.hiddenDate}>
              <p>When did you get your last covid vaccine?</p>
              <DatePicker
                className={classes.date}
                closeOnScroll={true}
                selected={startDate}
                required
                placeholderText={'Date'}
                onChange={(date) => setStartDate(date)}
              />
              <Calendar className={classes.calendarButton} />

            </div>
          )}
          {Object.keys(errors).length > 0 && (<div className={classes.radio}><p className={classes.errorMessage}>`*please fill out the form</p></div>)}

          <FormButton />

        </form>

      </div>
    </>
  )
}

export default Covid