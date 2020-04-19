import React from 'react';

export class Selection extends React.Component {

    constructor(props){
        super(props);
        this.state={}
    }

    handleChange = e => {
        let imageNumber = e.target.id;
        let newURL = e.target.value;
        this.props.updateImage(newURL,imageNumber)
    }

    render() {
        return(
        <div className="selectionArea">
          <p>Image 1:</p>
          <input type="text" placeholder="Please enter here..." onChange={this.handleChange} value={this.props.image1} id={0} />
          <p>Image 2:</p> 
          <input type="text" placeholder="Please enter here..." onChange={this.handleChange} value={this.props.image2} id=/*"image2"*/{1} />
          <p>Image 3:</p>
          <input type="text" placeholder="Please enter here..." onChange={this.handleChange} value={this.props.image3} id=/*"image2"*/{2} />  
        </div>
        );
    }
}