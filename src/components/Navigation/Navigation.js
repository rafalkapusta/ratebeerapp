import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

class Navigation extends Component{
    render() {
        return (
            <ul>
                {/*<li ><NavLink to={ROUTES.LANDING}>Start</NavLink></li>*/}
                {/*<li ><NavLink to={ROUTES.LOGIN}>Login</NavLink></li>*/}
                <li ><NavLink to={ROUTES.SEARCH_BEER}>Search for a Beer</NavLink></li>
                <li ><NavLink to={ROUTES.ADD_BEER}>Add New Beer</NavLink></li>
            </ul>
        )
    }
}

export default Navigation;