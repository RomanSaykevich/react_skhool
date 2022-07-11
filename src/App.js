import React, {Component} from 'react';

import {Comments, Posts, Users} from "./Components";

class App extends Component {


    render() {
        return (
            <div>
                <Users/>
                <hr/>
                <Posts/>
                <hr/>
                <Comments/>
            </div>
        );
    }
}

export default App;