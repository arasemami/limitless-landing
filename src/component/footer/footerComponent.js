import React, { Component } from 'react';
import './style.css';


class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="container p-50 txt-center">
                    <p>limitless co - 2019</p>
                </div>
            </div>
         );
    }
}
 
export default FooterComponent;