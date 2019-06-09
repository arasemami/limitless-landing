import React, { Component } from 'react';
import './style.css';
import limitless from '../../../assets/images/logo.png';



class AboutUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid p-b-200">
                <div className="container txt-center">
                    <h1 className="p-50">درباره ما</h1>
                    <div className="row">
                        <div className="col-50">
                            <div  className="about-us-image"></div>
                        </div>
                        <div className="col-50 p-20 about-us-text">
                            <h2>لیمیتلس ؟</h2>
                            <p>
                            با دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کردبا دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کرد
                            با دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کردبا دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کرد
                            </p>
                            <p>
                            با دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کردبا دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کرد
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AboutUsComponent;