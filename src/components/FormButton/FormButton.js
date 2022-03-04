import React, { useContext } from 'react'
import classes from './FormButton.module.css'

import { UserContext } from '../../UserContext'
import { Next, Previous, Circle } from '../../svg/icons'

import { Link } from "react-router-dom";


const FormButton = (props) => {
  const { setFormIndex, data, formIndex } = useContext(UserContext)
  return (
    <div className={classes.tracker}>
      {props.previous ? (
        <Link to="/"><Previous /></Link>
      ) : (
        <button className={classes.button} onClick={() => setFormIndex((prevState) => prevState -= 1)}>
          <Previous />
        </button>
      )}

      <Circle opacity={formIndex >= 0} />
      <Circle opacity={formIndex >= 1} />
      <Circle opacity={formIndex >= 2} />
      <Circle opacity={formIndex >= 3} />
      <Circle opacity={formIndex >= 4} />
      {props.next ? (
        <button className={classes.button} onClick={() => {
          if (data.skills.length > 0) {
            setFormIndex((prevState) => prevState += 1)
          }
        }
        }>
          <Next />
        </button>) : (<button className={classes.button} type="submit">
          <Next />
        </button>)
      }

    </div>

  )
}

export default FormButton