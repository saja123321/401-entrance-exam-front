import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import FavItems from './component/FavItems'

export class App extends Component {

  render() {
    const { isAuthenticated } = this.props.auth0
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route path="/">
              {(isAuthenticated) && <Home />}
            </Route>
            <Route path="/Fav">
              {isAuthenticated && <FavItems />}
            </Route>
          </Switch>
        </Router >
        <Footer />
      </div >
    )
  }
}

export default withAuth0(App);
