import React, { Component } from 'react';
import './style.css';

//
//
import logo from '../../assets/images/logo.png'


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container  p-10">
                <div className="row nav-bar">
                    <div className="col-20 header-menu">
                        <div   className="btn-header waves-effect ">ورود به سامانه</div>
                    </div>
                    <div className="col-60 header-menu">
                        <ul className="">
                            <li>درباره ما</li>
                            <li>خدمات ما</li>
                            <li>تماس باما</li>
                        </ul>
                    </div>
                    <div className="col-20 header-menu">
                        <img src={logo} className="header-logo" alt="" />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default HeaderComponent;