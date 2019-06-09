import React, { Component } from 'react';
import './style.css';



class AboutUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="container">
                    <p>About us</p>
                </div>
            </div>
         );
    }
}
 
export default AboutUsComponent;