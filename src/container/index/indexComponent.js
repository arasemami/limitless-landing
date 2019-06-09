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
            <div className="container-fluid">
                <HeaderComponent />
                <p>index component</p>
            </div>
         );
    }
}
 
export default IndexComponent;