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
                            پلتفرم نرم افزاری لیمیتلس ، بستری برای اتصال عرضه کننده، واسطه و خریدار به یکدیگر است، در این پلتفرم هر یک از اعضا بصورت مستقل میتوانند امکانات مدیریتی متفاوتی را دریافت نمایند، این پلتفرم صرفا در جزیره کیش عرضه میگردد و کلیه خدمات و پشتیبانی آن در محل این شرکت در جزیره کیش ارائه میگردد. 
                            </p>
                            <p>
                            برترین خدمات و ابزار فروش و بازاریابی و همچنین پشتیبانی ۲۴ ساعته شما را در رشد انقلابی فروشتان همراهی خواهد کرد.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AboutUsComponent;