import React from 'react';
import './App.scss';
import {HashRouter as Router, Route} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import HomePage from '../Home/Home';
import LandingPage from '../Landing/Landing';
//import SignUpPage from '../SignUp/SignUp';
//import SignInPage from '../SignIn/SignIn';
//import PasswordForgetPage from '../PasswordForget/PasswordForget';
//import AccountPage from '../Account/Account';
//import AdminPage from '../Admin/Admin';

import * as ROUTES from '../../constants/routes';



function App() {
  return (
      <Router>
          <div>
            <Navigation/>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            {/*<Route path={ROUTES.SIGN_UP} component={SignUpPage} />*/}
            {/*<Route path={ROUTES.SIGN_IN} component={SignInPage} />*/}
            <Route path={ROUTES.HOME} component={HomePage} />

          </div>
      </Router>
  );
}

export default App;
