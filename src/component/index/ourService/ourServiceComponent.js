import React, { Component } from 'react';
import './style.css';


class OurServiceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <h3>خدمات ما</h3>
                        <div className="col-33">ww</div>
                        <div className="col-33">ss</div>
                        <div className="col-33">dd</div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default OurServiceComponent;