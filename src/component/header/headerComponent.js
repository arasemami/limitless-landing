import React, { Component } from 'react';
import './style.css';



class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container bg-red p-10">
                <div className="row">
                    <div className="col-20"></div>
                    <div className="col-60 header-menu">
                        <ul>
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                        </ul>
                    </div>
                    <div className="col-20"></div>
                </div>
            </div>
         );
    }
}
 
export default HeaderComponent;