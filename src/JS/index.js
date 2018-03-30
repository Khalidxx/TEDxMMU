import React, { Component } from 'react';
import { render } from 'react-dom';

import '../CSS/main.css';

export default class MainApp extends Component {
    render(){
        return(
            <div>
                <h1>Welcome to React!</h1>
            </div>
        );
    }
}

render(<MainApp />, document.getElementById('app'));