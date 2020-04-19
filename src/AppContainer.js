import React from 'react';
import {Display} from './Display.js';
import {Selection} from './Selection.js';

export class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            /*image1: "https://desenio.co.uk/bilder/artiklar/zoom/11329_1.jpg",
            image2: "https://www.cityam.com/wp-content/uploads/2019/11/Centre-Point-view-2019-1280x720.jpg",
            image3: "https://www.pictorem.com/collection/900_Melanie-Viola_18-00521.jpg",*/
            images: ["https://desenio.co.uk/bilder/artiklar/zoom/11329_1.jpg","https://www.cityam.com/wp-content/uploads/2019/11/Centre-Point-view-2019-1280x720.jpg","https://www.pictorem.com/collection/900_Melanie-Viola_18-00521.jpg"],
            activeImage: 0
        }
    }

    updateImage = (newURL,imageNumber) => {
        let newImage = newURL;
        /* Creating a clone of the images array stops splice mutating state directlly */
        let imageArray = this.state.images;
        /* imageNumber comes from the id of specific input form that triggered function,
          1 refers to the number of items within array to delete (update with new image),
          newURL is the image given to the input form by the user */
        imageArray.splice(imageNumber,1,newURL);
        /* the whole array is updated on the state as updating individual items caused issues */
        this.setState({
            /*[imageNumber] : newImage, */
            images : imageArray 
        });
    }

    updateActiveImage = newIndex => {
        
        let galleryMax = ((this.state.images).length-1);
        let galleryMin = 0;

        if(newIndex<0){
            newIndex=galleryMax;
        } else if(newIndex>galleryMax){
            newIndex=0;
        };

        this.setState({
            activeImage: newIndex
        })
        console.log('New active is :' + this.state.activeImage)
        console.log(this.state.images[(this.state.activeImage)]);
    }

    render(){
        return (
            <div>
            <Selection updateImage={this.updateImage} images={this.state.images}/>
            <h1>Image no {this.state.activeImage+1} of {((this.state.images).length)}</h1>
            <Display image={this.state.images[(this.state.activeImage)]} activeImage ={this.state.activeImage} images={this.state.images} updateActiveImage={this.updateActiveImage}/>
            <Display image={this.state.images[0]} activeImage ={this.state.activeImage} images={this.state.images}/>
            <Display image={this.state.images[1]} activeImage ={this.state.activeImage} images={this.state.images} />
            <Display image={this.state.images[2]} activeImage ={this.state.activeImage} images={this.state.images} />
            </div>
        )
    }
}