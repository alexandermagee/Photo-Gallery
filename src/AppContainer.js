import React from 'react';
import {Display} from './Display.js';
import {Selection} from './Selection.js';

export class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image1: "https://desenio.co.uk/bilder/artiklar/zoom/11329_1.jpg",
            image2: "https://www.cityam.com/wp-content/uploads/2019/11/Centre-Point-view-2019-1280x720.jpg",
            image3: "https://www.pictorem.com/collection/900_Melanie-Viola_18-00521.jpg",
            images: ["one","Goose","googa"]
        }
    }

    updateImage = (newURL,imageNumber) => {
        let newImage = newURL;
        let imageArray = this.state.images;
        imageArray.splice(imageNumber,1,newURL);
        this.setState({
            /*[imageNumber] : newImage, */
            images : imageArray 
        });
        console.log(imageArray)
    }

    render(){
        return (
            <div>
            <Selection updateImage={this.updateImage}/>
            <Display image1={this.state.images[0]} />
            <Display image1={this.state.images[1]} />
            <Display image1={this.state.images[2]} />
            </div>
        )
    }
}