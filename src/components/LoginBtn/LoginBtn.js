import React, {Component} from "react";
import {auth} from "../Firebase/Firebase";

class LoginBtn extends Component{
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
    //console.log('state', this.state);
    //console.log('props', this.props);
        return (
             <div>
                {this.state.user?
                    <button className='Login_login-btn' onClick={this.handleLogout}>Log Out</button>
                    :
                    <button className='Login_login-btn' onClick={this.handleLogin}>Log In</button>}
             </div>
        )
    }
}

export default LoginBtn;