import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../../../App'
import HomePage from '../../pages/home/Home';
import Profile from '../../pages/profile/Profile';
import Links from './Links'



export default function Menu() {
    return (
        <Router>
                    <Links/>
                <Switch>
                    <Route path='/Home'>
                        <HomePage />
                    </Route>
                    <Route path='/Profile'>
                        <Profile />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    </Switch>
                </Router>    
    );
}
