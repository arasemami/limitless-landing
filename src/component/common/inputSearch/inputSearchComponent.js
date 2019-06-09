import React from 'react';

import './style.css';


// inputRef = React.createRef()








const InputSearch = (props) => {

    const handleFocus = (props) =>{ 
        document.getElementById(props.name).focus();
    }
    
    return (
        <div className="input-search-container">
            <div className="input-search-button" onClick={props.clickSearch} >
                
            </div>
            <div  className="input-search">
               
                <input    type={props.type}
                          onClick={props.clicked} 
                          placeholder={props.placeholder}
                          onChange={props.changed}
                          name={props.name}
                          required
                          disabled={props.disabled}
                          maxLength={props.max}
                          style={{color:props.color}}  
                          id={props.name}
                          value={props.val}
                          readOnly={props.readonly} 
                          autoComplete='off'
                          />

            </div>
          


        </div>
    )
}




export default InputSearch;


/*
example using 


 changedHandler = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }


      <InputSearch 
            type={'text'} 
            name={'search'}
            placeholder={'جستجو . . .'}
            changed={this.changedHandler}
            clickSearch={this._search}
        />


*/