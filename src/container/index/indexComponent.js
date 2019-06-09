import React, { Component } from 'react';
import './style.css';
import WelcomeComponent from '../../component/index/welcome/welcomeComponent';
import OurServiceComponent from '../../component/index/ourService/ourServiceComponent';
 


class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
             
                <WelcomeComponent />
                <OurServiceComponent />

            </div>
         );
    }
}
 
export default IndexComponent;