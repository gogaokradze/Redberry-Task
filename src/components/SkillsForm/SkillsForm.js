import React, { useContext, useEffect, useState, useRef } from 'react'
import FormButton from '../FormButton/FormButton'
import classes from './SkillsForm.module.css'
import Input from '../Input/Input'

import { Remove, Vector } from '../../svg/icons'
import { UserContext } from '../../UserContext'
import { useForm } from 'react-hook-form'

const SkillsForm = () => {
  const [skills, setSkills] = useState()
  const { data, setData } = useContext(UserContext)
  const { register, handleSubmit } = useForm({
    defaultValues: data || {},
  })
  const componentMounted = useRef(true)
  const forward = useRef(null)
  const backward = useRef(null)

  const keypress = e => {
    if (e.keyCode === 39) forward.current.click()
    if (e.keyCode === 37) backward.current.click()
  }

  useEffect(() => {
    fetch('https://bootcamp-2022.devtest.ge/api/skills')
      .then(response => response.json())
      .then(data => setSkills(data))
    window.addEventListener('keydown', keypress)

    return () => {
      componentMounted.current = false
      window.removeEventListener('keydown', keypress)
    }
  }, [])

  const add = submitData => {
    if (!data.skills.find(object => object.id === submitData.id)) {
      setData({
        ...data,
        skills: [
          ...data?.skills,
          { id: submitData.id, experience: submitData.experience },
        ],
      })
    }
  }

  return (
    <div className={classes.left}>
      <h1 className={classes.h1}>Tell us about your skills</h1>
      <form onSubmit={handleSubmit(add)} className={classes.form}>
        <div className={classes.formsize}>
          <div className={classes.vectordiv}>
            <select {...register('id')} required className={classes.dropdown}>
              <option value=''>Skills</option>
              {skills?.map(({ id, title }) => (
                <option value={id} key={id}>
                  {title}
                </option>
              ))}
            </select>
            <Vector className={classes.vector} />
          </div>
          <Input
            className={classes.number}
            register={register}
            name='experience'
            type='number'
            validation={{ required: true }}
            placeholder={'Experience Duration in Years'}
          />
          <div className={classes.center}>
            <input
              className={classes.submit}
              type='submit'
              value='Add programming language'
            />
          </div>
          {skills &&
            data?.skills.map(({ id, experience }, index) => {
              return (
                <div key={index} className={classes.box}>
                  <div className={classes.title}>
                    <p>{skills[+id - 1].title}</p>
                  </div>
                  <div className={classes.years}>
                    <p>Years of experience: {experience}</p>
                  </div>
                  <button
                    className={classes.remove}
                    type='button'
                    onClick={e => {
                      setData(
                        { ...data },
                        data?.skills.splice(
                          data.skills.findIndex(object => object.id === id),
                          1,
                        ),
                      )
                    }}
                  >
                    <Remove />
                  </button>
                </div>
              )
            })}
        </div>
        <FormButton next={true} forwardref={forward} backwardref={backward} />
      </form>
    </div>
  )
}

export default SkillsForm
