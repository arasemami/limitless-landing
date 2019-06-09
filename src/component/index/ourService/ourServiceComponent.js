import React, { Component } from 'react';
import './style.css';


class OurServiceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid" >
                <div className="container txt-center p-50" >
                    <h1 className="p-50">خدمات ما</h1>
                    <div className="row">
                        <div className="col-33">
                            <h2>پنل وب سرویس</h2>
                            <p className="our-service-desc">
                                با دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کردبا دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کرد
                            </p>
                            <div className="btn-header btn-service">
                                <p>ورود به وب سرویس</p>
                            </div>
                        </div>
                        <div className="col-33">
                            <h2>ساین آژانس</h2>
                            <p className="our-service-desc">
                            با دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کردبا دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کرد
                            </p>
                            <div className="btn-header btn-service">
                                <p>ورود به پنل آژانس</p>
                            </div>
                        </div>
                        <div className="col-33">
                            <h2>ساین عرضه کننده</h2>
                            <p className="our-service-desc">
                            با دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کردبا دریافت پنل از لیمیتلس به بیش از ۸۰٪ خدمات جزیره کیش بصورت یکجا دسترسی پیدا خواهید کرد
                            </p>
                            <div className="btn-header btn-service">
                                <p>ورود به عرضه کننده</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default OurServiceComponent;