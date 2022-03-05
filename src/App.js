import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { UserContext } from './UserContext'

import LandingPage from "./Pages/LandingPage";
import QuestionnairePage from "./Pages/QuestionnairePage";
import ThankYouPage from "./Pages/ThankYouPage/ThankYouPage";
import SubmittedAppsPage from "./Pages/SubmittedAppsPage/SubmittedAppsPage";

const initialData = JSON.parse(localStorage.getItem('data') || '{}')

function App () {
  const [data, setData] = useState({ skills: [], ...initialData })
  const [formIndex, setFormIndex] = useState(0)

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  return (
    <UserContext.Provider value={{ data, setData, formIndex, setFormIndex }}>
      <Router>
        <Switch>
          <Route path="/Thank-You">
            <ThankYouPage />
          </Route>
          <Route path="/Submitted-Applications">
            <SubmittedAppsPage />
          </Route>
          <Route path="/questionnaire">
            <QuestionnairePage />
          </Route>
          <Route path="/" exact>
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
