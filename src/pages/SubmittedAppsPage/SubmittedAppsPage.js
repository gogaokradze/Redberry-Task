import React, { useState, useEffect } from 'react'
import Submitted from '../../components/Submitted/Submitted'
import classes from './SubmittedAppsPage.module.css'

const SubmittedAppsPage = () => {
  const [displayData, setDisplayData] = useState()
  const [skills, setSkills] = useState()
  useEffect(() => {
    fetch(
      'https://bootcamp-2022.devtest.ge/api/applications?token=004599cc-9364-4ff9-bb87-48a276728275',
    )
      .then(response => response.json())
      .then(data => setDisplayData(data))
    fetch('https://bootcamp-2022.devtest.ge/api/skills')
      .then(response => response.json())
      .then(data => setSkills(data))
  }, [])

  return (
    <div className={classes.background}>
      <h1 className={classes.h1}>Submitted Applications</h1>
      {displayData?.map((data, index) => (
        <Submitted data={data} key={index} index={index} skills={skills} />
      ))}
    </div>
  )
}

export default SubmittedAppsPage
