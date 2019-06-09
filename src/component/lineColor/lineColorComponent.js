import React, { Component } from 'react';
import './style.css';

class LineColorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
                 <div className="liner-color-container">
                    <div className="bg-overlay p-50">
                        <div className="container  color-fff txt-center">
                            <h1>لیمیتلس</h1>
                            <h3>پلتفرمی یکپارچه ، فروشی بی‌نظیر</h3>
                        </div>

                        <div className="pattern"></div>
                   </div>
                 </div>
           
         );
    }
}
 
export default LineColorComponent;