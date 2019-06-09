import React, { Component } from 'react';
import './style.css';
import zarrinpal from '../../assets/images/zarrinpal.png'

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid footer">
                <div className="container p-20 ">
                  <div className="row">
                    <div className="col-20">
                        <div className="zarrinpal">
                        <a href="https://www.zarinpal.com/" >
                            <img src={zarrinpal} alt="زرین پال" />
                        </a>
                        </div>
                    </div>
                    <div className="col-80">
                        <p> شرکت تکنولوژی هوشمند و نامحدود زیگورات کیش - 1398 </p>
                        <div className="social-container">
                            <div className="social facbook"></div>
                            <div className="social instagram"></div>
                            <div className="social twitter"></div>
                            <div className="social linkedin"></div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
         );
    }
}
 
export default FooterComponent;