import React, {Component} from "react";
import Login from "../Login/Login";
import Navigation from "../Navigation/Navigation";

class Landing extends Component{
    render() {
        return (
            <>
            <Login userApp={this.props.userApp}/>
            <div>
                {/*{this.state.user?
                    <button className='Login_login-btn' onClick={this.handleLogout}>Log Out</button>
                    :
                    <button className='Login_login-btn' onClick={this.handleLogin}>Log In</button>}*/}

            </div>
            </>
        )
    }
}

export default Landing;