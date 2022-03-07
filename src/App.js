import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { UserContext } from './UserContext'

import LandingPage from "./pages/LandingPage/LandingPage";
import QuestionnairePage from "./pages/QuestionnairePage";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";
import SubmittedAppsPage from "./pages/SubmittedAppsPage/SubmittedAppsPage";

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
          <Route path="/thank-you">
            <ThankYouPage />
          </Route>
          <Route path="/submitted-applications">
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
