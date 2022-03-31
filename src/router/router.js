import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import personalPage from '../page/personalPage/personalPage';
import teamSignUp from '../page/teamSignUp/teamSignUp'
import memberManagement from '../page/memberManagement/memberManagement';
import teamActivity from "../page/teamActivity/teamActivity";


class router extends React.Component {
  render(){
    return(
      <Router >
        <div>
          <Route path="/memberManagement" component={memberManagement} />
          <Route path="/personalPage" component={personalPage} />
          <Route path="/teamActivity" component={teamActivity} />
          {/*<Route path="/teamSignUp" component={teamSignUp} />*/}
        </div>
      </Router>
    )
  }
}
export default router;
