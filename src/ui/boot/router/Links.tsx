import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Links() {
    return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Home'>home Page</Link>
                <Link to='/Profile'>Profile</Link>
            </nav>
    )
}
