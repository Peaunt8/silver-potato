import {BrowserRouter, Route, Switch} from "react-router-dom";
import MemberManagement from "./page/memberManagement/memberManagement";
import PersonalPage from "./page/personalPage/personalPage";
import TeamActivity from "./page/teamActivity/teamActivity";
import TeamSignup from "./page/teamSignUp/teamSignUp"
import SiderDemo from './siderDemo';
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/personal_page">
          <PersonalPage></PersonalPage>
        </Route>
        <Route path="/member_management">
          <MemberManagement></MemberManagement>
        </Route>
        <Route path="/team_activity">
          <TeamActivity></TeamActivity>
        </Route>
        <Route path='/team_sign_up'>
          <TeamSignup></TeamSignup>
        </Route>
        <Route path="/">
          <SiderDemo></SiderDemo>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
