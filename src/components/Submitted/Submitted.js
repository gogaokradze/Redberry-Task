import { useState } from 'react';
import classes from './Submitted.module.css'

import DatePicker from "react-datepicker";
import { Calendar } from '../../svg/icons'



const Submitted = ({ data, index, skills }) => {
  const [show, setShow] = useState(false)
  return (
    <div className={classes.main}>
      <button className={show ? classes.button1 : classes.button} onClick={() => setShow((prevValue) => !prevValue)}>
        <div className={classes.buttondiv}>
          <span>{index + 1}</span>
          <span className={show ? classes.rotateup : classes.rotatedown}> &gt;</span>
        </div>
      </button>
      {show && (<>
        <div className={classes.display}>

          <div className={classes.personal}>
            <h1 className={classes.title}>Personal Information</h1>
            <div className={classes.wrap}>
              <div className={classes.personalinfo}>
                <p>First Name</p>
                <p>Last Name</p>
                <p>E mail</p>
                {data.phone && (<p>Phone</p>)}
              </div>
              <div className={classes.personaldata}>
                <p>{data.first_name}</p>
                <p>{data.last_name}</p>
                <p>{data.email}</p>
                {data.phone && <p>{data.phone}</p>}
              </div>
            </div>
          </div>
          <div className={classes.skills}>
            <h1 className={classes.title}>Skillset</h1>
            {skills && data.skills.map(({ id, experience }, index) => (
              <div className={classes.skillsdiv} key={index}>
                <p >{skills.find((object) => object.id === id).title}:</p>
                <span className={classes.experience}>Years of Experience:&nbsp; {experience}</span>
              </div>
            ))}
          </div>
          <div className={classes.covid}>
            <h1 className={classes.title}>Covid Situation</h1>
            <div className={classes.radio}>
              <p className={classes.p}>how would you prefer to work?</p>
              <label >
                <input type="radio" checked={data.work_preference === "from_office" ? true : false} disabled />From Sairme Office
              </label>
              <label >
                <input type="radio" checked={data.work_preference === "from_home" ? true : false} disabled />From Home
              </label>
              <label >
                <input type="radio" checked={data.work_preference === "hybrid" ? true : false} disabled />Hybrid
              </label>
            </div>
            <div className={classes.radio}>
              <p className={classes.p}>Did you contact covid 19? :(</p>
              <label htmlFor="yes">
                <input type="radio" checked={data.had_covid} disabled />Yes
              </label>
              <label htmlFor="no">
                <input type="radio" checked={!data.had_covid} disabled />no
              </label>
            </div>
            {data.had_covid && (
              <div>
                <DatePicker className={classes.date} placeholderText={data.had_covid_at} disabled />
                <Calendar className={classes.calendar} />
              </div>
            )}
            <div className={classes.radio}>
              <p className={classes.p}>Have you been vaccinated?</p>
              <label >
                <input type="radio" checked={data.vaccinated} disabled />Yes
              </label>
              <label >
                <input type="radio" checked={!data.vaccinated} disabled />no
              </label>
            </div>
            {data.vaccinated && (
              <div>
                <DatePicker className={classes.date} placeholderText={data.vaccinated_at} disabled />
                <Calendar className={classes.calendar} />
              </div>
            )}
          </div>

          <div className={classes.insights}>
            <h1 className={classes.title}>Insights</h1>
            <div className={classes.radio}>
              <p className={classes.p} >Would you attend Devtalks and maybe also organize your own?</p>
              <label className={classes.label} >
                <input type="radio" checked={data.will_organize_devtalk} disabled />Yes
              </label>
              <label className={classes.label1} >
                <input type="radio" checked={!data.will_organize_devtalk} disabled />no
              </label>
            </div>
            {data.will_organize_devtalk && (
              <>
                <p className={classes.p}>What would you speak about at Devtalk?</p>
                <textarea value={data.devtalk_topic} className={classes.textarea} disabled />
              </>
            )}
            <p className={classes.p}>Tell us something special</p>
            <textarea value={data.something_special} disabled />
          </div>
        </div>
      </>
      )}
    </div>
  )
}

export default Submitted