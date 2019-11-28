import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

class Navigation extends Component{
    render() {
        return (
            <ul>
                <li ><NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink></li>
                <li ><NavLink to={ROUTES.SIGN_UP}>Sign Up</NavLink></li>
                <li ><NavLink to={ROUTES.LANDING}>Landing</NavLink></li>
                <li ><NavLink to={ROUTES.HOME}>Home</NavLink></li>
            </ul>
        )
    }
}

export default Navigation;