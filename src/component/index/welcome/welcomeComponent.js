import React, { Component } from 'react';
import './style.css';
import HeaderComponent from '../../header/headerComponent';


class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid   ">
                <div className=" bg-overlay "></div>
                <HeaderComponent />
                <div className="container" style={{height:'800px'}}>
                    <div className="slogan">
                        <h1> 
                            <span>لیمیتلس</span>
                        </h1>
                        <h2>تجمیع کننده خدمات گردشگری ، اقامتی و توریستی در جزیره زیبای کیش</h2>
                        <p className="p-20">
                        با دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کرد
                        </p>
            
                    </div>
                </div>
                <div className="pattern"></div>
            </div>
         );
    }
}
 
export default WelcomeComponent;