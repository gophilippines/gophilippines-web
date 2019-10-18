import React, { Component } from 'react'
import app from "../base";

class dashboard extends Component {
    render() {
        return (
            <div>
                dashboard
                <button onClick={() => app.auth().signOut()}>Sign out</button>
            </div>
        )
    }
}

export default dashboard
