import React , { Component } from 'react';
import './style.css'

class LoaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="loader-container">
                <div className="loader"></div>
            </div>
         );
    }
}
 
export default LoaderComponent;