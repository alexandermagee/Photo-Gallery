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
            images: ["https://desenio.co.uk/bilder/artiklar/zoom/11329_1.jpg","https://www.cityam.com/wp-content/uploads/2019/11/Centre-Point-view-2019-1280x720.jpg","https://www.pictorem.com/collection/900_Melanie-Viola_18-00521.jpg"]
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