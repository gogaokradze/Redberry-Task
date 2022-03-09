import React, { useContext } from 'react'
import classes from './QuestionnairePage.module.css'

import PersonalForm from '../../components/PersonalForm/PersonalForm'
import RedberryOrigins from '../../components/RedberryStories/RedberryStories'
import SkillsForm from '../../components/SkillsForm/SkillsForm'
import Covid from '../../components/Covid/Covid'
import Insights from '../../components/Insights/Insights'
import SubmitPage from '../SubmitPage/SubmitPage'

import { UserContext } from '../../UserContext'

const QuestionnairePage = () => {
  const { formIndex } = useContext(UserContext)

  return (
    <>
      {formIndex === 0 && (
        <>
          <div className={classes.flex}>
            <PersonalForm />
            <RedberryOrigins
              title={'Redberry Origins'}
              body={
                'You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇'
              }
            />
          </div>
        </>
      )}
      {formIndex === 1 && (
        <>
          <div className={classes.flex}>
            <SkillsForm />
            <RedberryOrigins
              title={'A bit about our battles'}
              body={
                'As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.'
              }
            />
          </div>
        </>
      )}
      {formIndex === 2 && (
        <div className={classes.flex}>
          <Covid />
          <RedberryOrigins
            title={'Redberry Covid Policies'}
            body={
              'As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales. '
            }
          />
        </div>
      )}
      {formIndex === 3 && (
        <div className={classes.flex}>
          <Insights />
          <RedberryOrigins
            title={'Redberrian Insights'}
            body={
              'We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!'
            }
          />
        </div>
      )}
      {formIndex === 4 && <SubmitPage />}
    </>
  )
}

export default QuestionnairePage
