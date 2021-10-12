import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../../pages/home/Home';
  import Profile from '../../pages/profile/Profile';

export default class index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li><Link to='/Home'>Home</Link></li>
                                <li><Link to='/Profile'>Profile</Link></li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path='/Home'>
                                <Home/>
                            </Route>
                            <Route path='/Profile'>
                                <Profile/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

