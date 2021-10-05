import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
export class Header extends Component {
    render() {


        const { isAuthenticated } = this.props.auth0

        return (
            <div>
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <h1>  Headrt </h1>
                            </li>
                            <li>
                                {isAuthenticated && <Link to="/">Home</Link>}
                            </li>
                            <li>
                                {isAuthenticated && <Link to="/Fav">Favorite Watch</Link>}
                            </li>
                            <li>
                                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                            </li>
                        </ul>
                    </nav>
                </Router>
            </div>
        )
    }
}

export default withAuth0(Header)
