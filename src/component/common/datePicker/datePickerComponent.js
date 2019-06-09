/* installatioin 

npm install --save react-advance-jalaali-datepicker

*/

import React , { Component } from 'react';

import './style.css';
import {  DatePicker } from "react-advance-jalaali-datepicker";


 





class DatePickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


  

    DatePickerInput(props) {
         // console.log(props)
         return <input className="popo" {...props} ></input>;
     }



    render() { 
        const handleFocus = (props) =>{ 
            document.getElementById(props.name).focus();
        }

        return ( 
            <div  className="Inputbox">
              <p className="input-compinent-label">{this.props.label}</p>
                <div  className="input-label-date">
                     <DatePicker
                            format="jYYYY/jMM/jDD"
                            onChange={this.props.change}  
                            inputComponent={this.DatePickerInput}
                            placeholder={this.props.currentDate}
                            id={this.props.name}
                            preSelected={this.props.currentDate}
                        />
                     <span className="span-label"   onClick={()=> handleFocus(this.props)}>{this.props.placeholder }</span>
                    </div>
            </div>
         );
    }
}
 
export default DatePickerComponent;


/*
example using 

    //
    //
    // date picker selector funcation ---------------------------------------------- 
    change = ( unix, formatted , val) => { 
        // console.log(unix)
        // console.log(formatted) 
        // console.log(val) 

            this.setState({
                [val]:unix
            })
     
    }


   
                        <DatePickerComponent
                            placeholder="تاریخ شروع"
                            change={(  unix, formatted , val) => this.change(unix, formatted, 'dateStart')}
                            name={'dateStart'}
                        />


*/