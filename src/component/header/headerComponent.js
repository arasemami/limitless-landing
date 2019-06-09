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
                        <a  href="#service"  className="btn-header waves-effect ">ورود به سامانه</a>
                    </div>
                    <div className="col-60 header-menu">
                        <ul className="">
                            <li>
                                <a href="#contact-us">تماس باما</a>
                            </li>
                            <li>
                                <a href="#service">خدمات ما</a>
                            </li>
                            <li >
                                <a href="#about-us">درباره ما</a>
                            </li>
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