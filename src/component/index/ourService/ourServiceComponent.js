import React, { Component } from 'react';
import './style.css';


class OurServiceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid p-b-200" id="service">
                <div className="container txt-center p-50" >
                    <h1 className="p-50">خدمات ما</h1>
                    <div className="row">
                        <div className="col-33">
                            <h2>پنل وب سرویس</h2>
                            <p className="our-service-desc">
                            این پنل مخصوص توسعه دهندگان محترم میباشد که میتوانند بدون هیچ محدودیتی از کلیه خدمات پنل بصورت وایت لیبل ، وایت برند و تحت برند خود یا مشتری شان استفاده نمایند. همچنین میتوانند جهت ساخت وب سایتهای مشتریان ما با وب سرویس های موجود نیز از خدمات استفاده نمایند
                            </p>
                            <div className="btn-header btn-service">
                                <p>ورود به وب سرویس
                                <span className="free"> (رایگان) </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-33">
                            <h2>ساین آژانس</h2>
                            <p className="our-service-desc">
                            آژانس ها میتوانند با دریافت پنل آژانس به دهها عرضه کننده مستقر در جزیره متصل شوند و همچنین شبکه ی فروش خود را ایجاد کنند
                            </p>
                            <div className="btn-header btn-service">
                                <p>
                                    ورود به پنل آژانس
                                    <span className="free"> (رایگان) </span>
                                    </p>
                            </div>
                          
                        </div>
                        <div className="col-33">
                            <h2>ساین عرضه کننده</h2>
                            <p className="our-service-desc">
                            مجموعه داران محترم در جزیره کیش میتوانند با دریافت پنل عرضه کننده از خدمات بینهایتی آن استفاده نمایند و فروش خود را بیش از پیش رشد دهند
                            </p>
                            <div className="btn-header btn-service">
                                <p>ورود به عرضه کننده
                                <span className="free"> (رایگان) </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default OurServiceComponent;