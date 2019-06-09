import React, { Component } from 'react';
import './style.css';
import Input from '../../common/input/Input';
import TextArea from '../../common/textarea/textarea';
import Button from '../../common/Button/Button';




class ContactUsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="container txt-center">
                    <h1>تماس باما</h1>
                    <div className="row">
                        <div className="col-70">
                            <div className="row">
                              <div className="col-50">
                                <Input 
                                    type={'text'} 
                                    name={'email'}
                                    placeholder={'پست الکترونیک'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError} // if you want show error pass error text to this props
                                    label=""  // title of text 
                                    val={this.state.email}
                                    readonly={false}
                                />
                              </div>
                              <div className="col-50">
                                <Input 
                                    type={'text'} 
                                    name={'email'}
                                    placeholder={'نام و نام خانوادگی'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError} // if you want show error pass error text to this props
                                    label=""  // title of text 
                                    val={this.state.email} 
                                />
                              </div>
                            </div>
                            <div className="col-100">
                                <Input 
                                    type={'text'} 
                                    name={'email'}
                                    placeholder={'عنوان'}
                                    changed={this.changedHandler}
                                    error={this.state.forgetEmailError} // if you want show error pass error text to this props
                                    label=""  // title of text 
                                    val={this.state.email} 
                                />
                              </div>
                              <div className="col-100">
                                <TextArea 
                                        type={'text'} 
                                        name={'email'}
                                        placeholder={'متن پیام'}
                                        changed={this.changedHandler}
                                        error={this.state.forgetEmailError}
                                    />
                              </div>
                              <div className="col-30">
                                <Button                                                                  
                                    isLoading={this.state.isLoading}                                    
                                    title={'ارسال'}                                                      
                                    bgcolor={'#0088F9'}                                                 
                                    hoverbgcolor={'#0088F9'}                                          
                                    click={this.callSubmit}
                                    color="#fff"
                                    id={'1'}
                                    width={'100%'}
                                    borderRadius={'500px'}
                                /> 
                              </div>
                        </div>
                        <div className="col-30">
                            <ul className="contact-us-info">
                                <li>
                                    <h3>نشانی</h3>
                                    <p>جزیره زیبای کیش ، رویا مال ، واحد ۲۲۲</p>
                                </li> 
                                <li>
                                    <h3>تلفن تماس</h3>
                                    <p>02-8585854</p>
                                </li>
                                <li>
                                    <h3>ساعت کاری</h3>
                                    <p>09:00 صبح الی 18:00 عصر</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ContactUsComponent;