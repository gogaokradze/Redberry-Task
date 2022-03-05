import React, { useContext, useEffect, useState, useRef } from 'react'
import FormButton from '../FormButton/FormButton'
import classes from './SkillsForm.module.css'
import Input from '../input/Input'

import { Remove, Vector } from '../../svg/icons'
import { UserContext } from '../../UserContext'
import { useForm } from 'react-hook-form'



const SkillsForm = () => {
  const [skills, setSkills] = useState()
  const { data, setData } = useContext(UserContext)
  const { register, handleSubmit } = useForm({
    defaultValues: data || {},
  });
  const componentMounted = useRef(true);

  useEffect(() => {
    fetch('https://bootcamp-2022.devtest.ge/api/skills')
      .then(response => response.json())
      .then(data => setSkills(data));
    return () => { // This code runs when component is unmounted
      componentMounted.current = false; // (4) set it to false when we leave the page
    }
  }, [])

  const add = (submitData) => {
    if (!data.skills.find((object) => object.id === submitData.id)) {
      setData({ ...data, skills: [...data?.skills, { id: submitData.id, experience: submitData.experience }] })
    }
  }

  return (
    <div className={classes.left}>
      <h1>Tell us about your skills</h1>
      <form onSubmit={handleSubmit(add)} className={classes.form}>
        <div className={classes.vectordiv}>
          <select {...register("id")} required className={classes.dropdown}>
            <option value="">Skills</option>
            {skills?.map(({ id, title }) => (
              <option value={id} key={id}>{title}</option>
            ))}
          </select>
          <Vector className={classes.vector} />
        </div>
        <Input className={classes.number} register={register} name='experience' type='number' validation={{ required: true }} placeholder={'Experience Duration in Years'} />
        <div className={classes.center}>
          <input className={classes.submit} type="submit" value="Add programming language" />
        </div>
        {skills && data?.skills.map(({ id, experience }, index) => {
          return (
            <div key={index} className={classes.box}>
              <p >{skills[+id - 1].title}</p>
              <p className={classes.years}>Years of experience: {experience}</p>
              <button className={classes.remove} type="button" onClick={(e) => {
                setData({ ...data }, data?.skills.splice(data.skills.findIndex((object) => object.id === id), 1))
              }
              }><Remove /></button>
            </div>
          )
        })}
        <FormButton next={true} />
      </form>
    </div>
  )
}


export default SkillsForm