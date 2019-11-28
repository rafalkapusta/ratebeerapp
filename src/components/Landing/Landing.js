import React, {Component} from "react";
import Login from "../Login/Login";

class Landing extends Component{
    render() {
        return (
            <Login login={this.props.login} logout={this.props.logout} userApp={this.props.userApp}/>
        )
    }
}

export default Landing;