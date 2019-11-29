import React, {Component} from "react";
import {auth} from "../Firebase/Firebase";

import './Login.scss'

class Login extends Component{
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
    handleLogout =(e)=> {
      this.props.logout();
      this.setState({user: null, username: '', email: '' })
    };
    handleLogin =(e)=>{
      this.props.login();
      this.setState({user: this.props.userApp.user, username: this.props.userApp.username, email: this.props.userApp.email })
    };
    render() {
        //console.log(this.props);
        return (
            <div className='Login_loginContainer'>
                <div className='Login_loginUser'>
                    <h1>
                        {this.state.user? this.state.user.displayName : null }
                    </h1>
                    <div className='Login_loginImg'>
                        {this.state.user? <img className='Login_userPhoto' src={this.state.user.photoURL}/> : null}
                    </div>
                </div>
                <div className='Login_login-btn'>
                        {this.state.user?
                        <button className='Login_login-btn' onClick={this.handleLogout}>Log Out</button>
                        :
                        <button className='Login_login-btn' onClick={this.handleLogin}>Log In with Google Account</button>}
                </div>
            </div>
        )
    }
}

export default Login;
