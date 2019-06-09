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
                            <img src={zarrinpal} alt="زرین پال" />
                        </div>
                    </div>
                    <div className="col-80">
                        <p> شرکت تکنولوژی هوشمند و نامحدود زیگورات کیش - 1398 </p>
                        <div className="social-container">
                            <div className="social"></div>
                            <div className="social"></div>
                            <div className="social"></div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
         );
    }
}
 
export default FooterComponent;