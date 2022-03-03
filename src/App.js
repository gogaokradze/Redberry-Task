import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { UserContext } from './UserContext'

import LandingPage from "./Pages/LandingPage";
import QuestionnairePage from "./Pages/QuestionnairePage";

function App () {
  const [data, setData] = useState({ skills: [] })
  const [formIndex, setFormIndex] = useState(0)

  return (
    <UserContext.Provider value={{ data, setData, formIndex, setFormIndex }}>
      <Router>
        <Switch>
          <Route path="/Submitted-Applications">
            Submitted-Applications
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
