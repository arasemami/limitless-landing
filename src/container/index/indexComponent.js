import React, { Component } from 'react';
import './style.css';
import HeaderComponent from '../../component/header/headerComponent';



class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="container-fluid   ">
                   
                    <div className=" bg-overlay ">
                   
                    </div>
                    <HeaderComponent />
                    <div className="container">
                        <div className="slogan">
                            <h1> 
                                <span>لیمیتلس</span>
                            </h1>
                            <h2>تجمیع کننده خدمات گردشگری ، اقامتی و توریستی در جزیره زیبای کیش</h2>
                   
                        </div>
                    </div>
                    <div className="pattern"></div>
                </div>
                

            </div>
         );
    }
}
 
export default IndexComponent;