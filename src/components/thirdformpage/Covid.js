import React, { useContext, useState } from 'react'
import FormButton from '../FormButton/FormButton'
import classes from './covid.module.css'

import { UserContext } from '../../UserContext'
import { useForm } from 'react-hook-form'
import { Calendar } from '../../svg/icons'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





const Covid = () => {
  const { data, setData, setFormIndex } = useContext(UserContext)
  const { register, handleSubmit, watch } = useForm({
    defaultValues: data || {},
  });
  const [startDate, setStartDate] = useState();
  const [startDate2, setStartDate2] = useState()

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
          {watch().had_covid === 'yes' && (
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
              <Calendar className={classes.calendar} />
            </div>
          )}
          <div className={classes.radio}>
            <p>Have you been vaccinated?</p>
            <label htmlFor="vaccinated">
              <input type="radio" id="vaccinated" {...register("vaccinated")} value="yes" />Yes
            </label>
            <label htmlFor="unvaccinated">
              <input type="radio" id="unvaccinated" {...register("vaccinated")} value="no" />no
            </label>
          </div>
          {watch().vaccinated === 'yes' && (
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
              <Calendar className={classes.calendar} />

            </div>
          )}


          <FormButton />

        </form>

      </div>
    </>
  )
}

export default Covid