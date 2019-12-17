import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import './Navigation.scss'

import * as ROUTES from '../../constants/routes'
import LoginBtn from "../LoginBtn/LoginBtn";
import Login from "../Login/Login";

class Navigation extends Component{
    render() {
        return (
            <ul className='Navigation_navContainer'>
                <li ><NavLink to={ROUTES.LANDING} className='navlink'>Start</NavLink></li>
                <li ><NavLink to={ROUTES.SEARCH_BEER} className='navlink'>Search for a Beer</NavLink></li>
                <li ><NavLink to={ROUTES.ADD_BEER} className='navlink'>Add New Beer</NavLink></li>
                {/*<li ><NavLink to={ROUTES.LOGIN}>Login</NavLink></li>*/}
            </ul>
        )
    }
}

export default Navigation;