import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'


const ThankYouPage = () => {
  const { data, setFormIndex } = useContext(UserContext)
  console.log(data)
  return (
    <div>ThankYouPage</div>
  )
}

export default ThankYouPage