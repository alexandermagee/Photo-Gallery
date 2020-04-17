import React from 'react';
import {Display} from './Display.js';
import {Selection} from './Selection.js';

export class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image1: "https://desenio.co.uk/bilder/artiklar/zoom/11329_1.jpg",
            image2: "",
            image3: ""
        }
    }

    updateImage = newURL => {
        let newImage = newURL;
        this.setState({
            image1: newImage
        });
        console.log(this.state.image1)
    }

    render(){
        return (
            <div>
            <Selection updateImage={this.updateImage} image1={this.state.image1} />
            <Display image1={this.state.image1} />
            </div>
        )
    }
}