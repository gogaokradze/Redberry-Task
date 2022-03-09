import React, { useState, useEffect } from 'react'
import Submitted from '../../components/Submitted/Submitted'
import classes from './SubmittedAppsPage.module.css'

const SubmittedAppsPage = () => {
  const [displayData, setDisplayData] = useState()
  const [skills, setSkills] = useState()
  useEffect(() => {
    fetch('https://bootcamp-2022.devtest.ge/api/applications?token=fdbdd790-3af5-4a87-be88-b30ad3d987be')
      .then(response => response.json())
      .then(data => setDisplayData(data));
    fetch('https://bootcamp-2022.devtest.ge/api/skills')
      .then(response => response.json())
      .then(data => setSkills(data));
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