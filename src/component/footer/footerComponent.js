import React, { Component } from 'react';
import './style.css';


class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid footer">
                <div className="container p-20 txt-center">
                    <p>شرکت تکنولوژی هوشمند و نامحدود زیگورات کیش - 1398</p>
                </div>
            </div>
         );
    }
}
 
export default FooterComponent;