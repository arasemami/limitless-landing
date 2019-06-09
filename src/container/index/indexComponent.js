import React, { Component } from 'react';
import './style.css';
import WelcomeComponent from '../../component/index/welcome/welcomeComponent';
import OurServiceComponent from '../../component/index/ourService/ourServiceComponent';
import AboutUsComponent from '../../component/index/aboutUs/aboutUsComponent';
import PartnerComponent from '../../component/index/partner/partnerComponent';
import ContactUsComponent from '../../component/index/contactUs/contactUsComponent';
import LineColorComponent from '../../component/lineColor/lineColorComponent';
 


class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="">
             
                <WelcomeComponent />
                <OurServiceComponent />
                <AboutUsComponent />
                {/* <PartnerComponent /> */}
                <LineColorComponent />
                <ContactUsComponent />

            </div>
         );
    }
}
 
export default IndexComponent;