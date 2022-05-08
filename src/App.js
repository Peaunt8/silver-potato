import React from 'react';
import SiderDemo from './page/siderDemo/siderDemo';
import LogIn from "./page/logIn/logIn";
import {Route, Router, Routes} from "react-router-dom";
import PersonalPage from "./page/personalPage/personalPage";
import TeamActivity from "./page/teamActivity/teamActivity";
import MemberManagement from "./page/memberManagement/memberManagement";
import UserInformation from "./page/userInformation/userInformation";
import TeamSignUp from "./page/teamSignUp/teamSignUp";
import Demo from "./page/userInformation/userInformation";


function TeamSignup() {
  return null;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/siderDemo" element={<SiderDemo />} >
        <Route index element={<PersonalPage />}/>
        <Route path="team_activity" element={<TeamActivity />} />
        <Route path="member_management" element={<MemberManagement />} />
        <Route path="user_information" element={<UserInformation/>} />
        <Route path="team_sign_up" element={<TeamSignUp/>} />
        <Route path="personal_page" element={<PersonalPage />} />
      </Route>

    </Routes>

  );
}

export default App;
