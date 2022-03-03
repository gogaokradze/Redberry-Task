import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'

const SubmitPage = () => {
  const { data, setData } = useContext(UserContext)
  console.log(data)
  return (
    <div>
      submit page
    </div>
  )
}

export default SubmitPage