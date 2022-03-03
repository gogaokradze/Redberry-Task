import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import classes from './SubmitPage.module.css'

import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'

const SubmitPage = () => {
  const { data } = useContext(UserContext)
  console.log(data)
  return (
    <div className={classes.background}>
      <div>
        <PrimaryButton >Submit</PrimaryButton>
        <SecondaryButton>Go Back</SecondaryButton>
      </div>
    </div>
  )
}

export default SubmitPage