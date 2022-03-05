import React, { useEffect, useContext } from 'react'
import { UserContext } from '../../UserContext'
import classes from './ThankYouPage.module.css'
import { useHistory } from 'react-router-dom'



const ThankYouPage = () => {
  const { data, setData, setFormIndex } = useContext(UserContext)
  let history = useHistory();
  console.log(data)
  useEffect(() => {
    fetch('https://bootcamp-2022.devtest.ge/api/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        "token": "35e0b3ee- b256 - 476d - 9036 - f6ae3b5ce85d",
        "first_name": data.firstName,
        "last_name": data.lastName,
        "email": data.email,
        "phone": data?.phoneNumber.trim(),
        "skills": data.skills,
        "work_preference": data.work_preferance,
        "had_covid": data.had_covid === 'false' ? false : true,
        "had_covid_at": data?.had_covid_at,
        "vaccinated": data.vaccinated === 'false' ? false : true,
        "vaccinated_at": data.vaccinated_at,
        "will_organize_devtalk": data.will_organize_devtalk === 'false' ? false : true,
        "devtalk_topic": data.devtalk_topic,
        "something_special": data.something_special
      }

    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setTimeout(() => {
      setData({ skills: [] })
      setFormIndex(0)
      localStorage.removeItem('data')
      history.push('/')
    }, 1000000);
  }, [])

  return (
    <div className={classes.background}>
      <h1 className={classes.thanks}>Thanks for Joining 😊</h1>

    </div>
  )
}

export default ThankYouPage