import React, { useContext, useEffect, useState } from 'react'
import FormButton from '../FormButton/FormButton'
import classes from './SkillsForm.module.css'
import Input from '../input/Input'

import { Remove } from '../../svg/icons'
import { UserContext } from '../../UserContext'
import { useForm } from 'react-hook-form'


const SkillsForm = () => {
  const [skills, setSkills] = useState()
  const { data, setData } = useContext(UserContext)
  const { register, handleSubmit } = useForm({
    defaultValues: data || {},
  });

  useEffect(() => {
    fetch('https://bootcamp-2022.devtest.ge/api/skills')
      .then(response => response.json())
      .then(data => setSkills(data));
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
        <select {...register("id")} required className={classes.dropdown}>
          <option value="">Skills</option>
          {skills?.map(({ id, title }) => (
            <option value={id} key={id}>{title}</option>
          ))}
        </select>
        <Input register={register} name='experience' validation={{ required: true }} placeholder={'Experience Duration in Years'} />
        <div className={classes.center}>
          <input className={classes.submit} type="submit" value="Add programming language" />
        </div>
        {skills && data?.skills.map(({ id, experience }, index) => {
          return (
            <div key={index} className={classes.box}>
              <p >{skills[+id - 1].title}</p>
              <p>Years of experience: {experience}</p>
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