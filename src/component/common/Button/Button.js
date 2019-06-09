import React from 'react';
import Radium from 'radium'
import './Button.css';

const button = (props) => (
    <div  className="button-box" id={props.id} >
        <button className="button-style"  
                onClick={props.click} 
                style={{backgroundColor : props.bgcolor ,
                        width:props.width,
                        ':hover' : {opacity : '0.8'} ,
                        borderRadius: props.borderRadius ,
                        color:props.color} } >
                    {props.isLoading ? (
                        <div  className="loader-button"></div>
                    ) : (
                            props.title
                    )}
                
        </button>

    </div>
);

export default Radium(button);



/*
=====================================================================================
How can use this button : ------->                                                  
                                                                                    
                                                                                    
             <Button                                                                  
                    isLoading={this.state.isLoading}                                    
                    title={'Send'}                                                      
                    bgcolor={'#0088F9'}                                                 
                    hoverbgcolor={'#0088F9'}                                          
                    click={this.callSubmit}
                    color="#fff"
                    id={'1'}
                    width={'100%'}
                    borderRadius={'500px'}
                />                                          
                                                                                    
                                                                                    
=====================================================================================

*/