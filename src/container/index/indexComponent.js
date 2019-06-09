import React, { Component } from 'react';
import './style.css';
import WelcomeComponent from '../../component/index/welcome/welcomeComponent';
import OurServiceComponent from '../../component/index/ourService/ourServiceComponent';
import AboutUsComponent from '../../component/index/aboutUs/aboutUsComponent';
import PartnerComponent from '../../component/index/partner/partnerComponent';
 


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
                <AboutUsComponent />
                {/* <PartnerComponent /> */}

            </div>
         );
    }
}
 
export default IndexComponent;