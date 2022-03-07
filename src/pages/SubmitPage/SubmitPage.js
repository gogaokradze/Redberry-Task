import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import classes from './SubmitPage.module.css'

import { useHistory } from 'react-router-dom'



const SubmitPage = () => {
  const { data, setFormIndex } = useContext(UserContext)
  let history = useHistory();
  const phoneCondition = data.phoneNumber.length > 0 ? true : false

  let sendData = {
    "token": "fdbdd790-3af5-4a87-be88-b30ad3d987be",
    "first_name": data.firstName,
    "last_name": data.lastName,
    "email": data.email,
    ...(phoneCondition && { "phone": data.phoneNumber }),
    "skills": data.skills,
    "work_preference": data.work_preferance,
    "had_covid": data.had_covid === 'false' ? false : true,
    "had_covid_at": data?.had_covid_at,
    "vaccinated": data.vaccinated === 'false' ? false : true,
    "vaccinated_at": data.vaccinated_at,
    "will_organize_devtalk": data.will_organize_devtalk === 'false' ? false : true,
    ...(data?.devtalk_topic && { "devtalk_topic": data?.devtalk_topic }),
    "something_special": data.something_special
  }

  return (
    <div className={classes.background}>
      <button className={classes.link} onClick={() => {
        fetch(`https://bootcamp-2022.devtest.ge/api/application`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
          },
          body: JSON.stringify(sendData)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        history.push('/thank-you')

      }}>Submit</button>
      <button className={classes.back} onClick={() => setFormIndex((prevState) => prevState -= 1)}>go back</button>
    </div>
  )
}

export default SubmitPage