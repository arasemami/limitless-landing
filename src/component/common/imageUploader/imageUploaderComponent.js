import React , { Component } from 'react';
import './style.css'; 


class ImageUploaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            // image : IconDefualt
            image : this.props.default
        }
    }

    
      //
    //  get image uploader for avatar of user ----------------------------------------------------------->
    //
    _uploadPicture = async(e) => {
        console.log(e.target.files[0])
       await this.setState({
            selectedFile: e.target.files[0],
            image:URL.createObjectURL(e.target.files[0])
        }) 
        this.props.change(this.state.selectedFile)
    }

    componentWillMount(){
        console.log(this.props.default)
        this.setState({
            image: this.props.default
        })
    }

    componentWillReceiveProps(nextProps, prevState){
        console.log('props is upodate');
        console.log(nextProps.default)
        if(nextProps.default!==this.props.default){
            this.setState({
                image: nextProps.default
            })
            console.log('image update !')
        }
       
    }

    
    render() { 
        return ( 
            <div className="avatar-container">
                <p>{this.props.title}</p>
                <label htmlFor="file">
                    <div className="avatar-wrapper">
                        <img className="profile-pic" src={this.state.image} />
                        <div className="upload-button">
                            <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        </div>
                        <input 
                            id="file" 
                            className="file-upload" 
                            type="file" 
                            accept="image/*"
                            name="profilepicture"
                            onChange={this._uploadPicture}
                        />
                    </div>
                </label>
            </div>
         );
    }
}
 
export default ImageUploaderComponent;








/*

    //
    // for get back value from image uploader component use this action ........................
    actionImage = async(val) => {
        await this.setState({
             avatarImage : val
         })
 
     }



    <ImageUploaderComponent 
        change={(val) => this.actionImage(val)} 
        default={this.state.image}  // defual image and  show get image from server & loading image too
        title="لوگو و تصویر آژانس" 
    />



*/