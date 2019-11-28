import React, {Component} from 'react';
import './App.scss';
import {HashRouter as Router, Route} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import AddBeer from '../AddBeer/AddBeer';
import SearchBeer from '../SearchBeer/SearchBeer';
//import Login from '../Login/Login';

import * as ROUTES from '../../constants/routes';
import {auth, provider} from "../Firebase/Firebase";


class App extends Component{
    state = {
        user: null,
        username: '',
        email: ''
    };
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user: user});
            }
        });
    }
    Logout =(e)=> {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null,
                    username: '',
                    email: ''
                });
            });
    };
    Login =(e)=> {
        auth.signInWithPopup(provider)
            .then((result) => {
                //console.log('result',result);
                const user = result.user;
                //console.log('user', user);
                this.setState({
                    user: user,
                    username: user.displayName,
                    email: user.emailVerified
                });
            });
    };
    render() {
        return(
            <>
            <div>
                <h1>{this.state.username? this.state.username : 'Login' }</h1>
                <div className='App_login'>
                {this.state.user?
                    <button className='App_login-btn' onClick={this.Logout}>Log Out</button>
                    :
                    <button className='App_login-btn' onClick={this.Login}>Log In</button>}
                {this.state.user? <img className='App_userPhoto' src={this.state.user.photoURL}/> : null}
                </div>
            </div>
            <Router>
                <div>
                    <Navigation/>
                    {/*<Route exact path={ROUTES.LANDING} component={Landing}/>*/}
                    <Route path={ROUTES.SEARCH_BEER} render={() => <SearchBeer userInfo={this.state.user} />}/>
                    <Route path={ROUTES.ADD_BEER} render={() => <AddBeer userInfo={this.state.user} />} />
                </div>
            </Router>
            </>
        )
    }
}

export default App;
