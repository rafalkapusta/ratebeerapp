import React, {Component} from 'react';
import './App.scss';
import {HashRouter as Router, Route} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import AddBeer from '../AddBeer/AddBeer';
import SearchBeer from '../SearchBeer/SearchBeer';
import Login from '../Login/Login';
import Landing from "../Landing/Landing";

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
    Logout =()=> {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null,
                    username: '',
                    email: ''
                });
            });
    };
    Login =()=> {
        auth.signInWithPopup(provider)
            .then((result) => {
                //console.log('result',result);
                const user = result.user;
                //console.log('user', user);
                this.setState({
                    user: user,
                    username: user.displayName,
                    email: user.emailVerified
                },()=>console.log(this.state));
            });
    };
    render() {
        return(
            <div className='App'>
            <Router>
                <div>
                    <Navigation/>
                    <Route exact path={ROUTES.LANDING} render={() => <Landing login={this.Login} logout={this.Logout} userApp={this.state}/>}/>
                    {/*<Route path={ROUTES.LOGIN} render={() => <Login login={this.Login} logout={this.Logout} appState={this.state} />}/>*/}
                    <Route path={ROUTES.SEARCH_BEER} render={() => <SearchBeer userInfo={this.state.user} />}/>
                    <Route path={ROUTES.ADD_BEER} render={() => <AddBeer userInfo={this.state.user} />} />
                </div>
            </Router>
            </div>
        )
    }
}

export default App;
