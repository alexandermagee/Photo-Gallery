import React from 'react';
import {Display} from './Display.js';
import {Selection} from './Selection.js';

export class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: ["https://desenio.co.uk/bilder/artiklar/zoom/11329_1.jpg","https://www.cityam.com/wp-content/uploads/2019/11/Centre-Point-view-2019-1280x720.jpg","https://www.pictorem.com/collection/900_Melanie-Viola_18-00521.jpg"],
            activeImage: 0
        }
    }

    updateImage = (newURL,imageNumber) => {
        /* Creating a clone of the images array stops splice mutating state directly */
        let imageArray = this.state.images;
        
        /* imageNumber comes from the id of specific input form that triggered function,
          1 refers to the number of items within array to delete (update with new image),
          newURL is the image given to the input form by the user */
        imageArray.splice(imageNumber,1,newURL);
        
        /* the whole array is updated on the state as updating individual items caused issues */
        this.setState({
            images : imageArray 
        });
    }

    updateActiveImage = newIndex => {
    
        /*Defines position of the final image */
        let galleryMax = ((this.state.images).length-1);
        /*Defines position of the first image */
        let galleryMin = 0;

        /* conditional to ensure that the index does not go beyond the limits of the images Array  */
        if(newIndex<0){
            newIndex=galleryMax;
        } else if(newIndex>galleryMax){
            newIndex=galleryMin;
        };

        this.setState({
            activeImage: newIndex
        })
    }

    render(){
        return (
            <div>

            <Selection 
            updateImage={this.updateImage} 
            />

            <Display 
            image={this.state.images[(this.state.activeImage)]} 
            activeImage ={this.state.activeImage} 
            images={this.state.images} 
            updateActiveImage={this.updateActiveImage}
            />

            </div>
        )
    }
}