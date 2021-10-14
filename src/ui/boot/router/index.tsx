import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../../pages/home/Home';
  import Profile from '../../pages/profile/Profile';


export default function Index() {
    return (
        <Router>
                    <div>
                        <nav>
                        <Link to='/Home'>Home</Link>
                        <Link to='/Profile'>Profile</Link>
                            
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
    )
}



