import React, { useState } from "react";

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

function App () {
  const [data, setData] = useState({ skills: [] })
  const [formIndex, setFormIndex] = useState(0)

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
