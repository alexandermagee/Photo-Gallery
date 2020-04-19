import React from 'react';

export class Selection extends React.Component {

    handleChange = e => {
        /*Each input form has an id referencing its position (z-index) within the images array (corresponds to activeImage functions) */
        let imageNumber = e.target.id;

        /*captures the value entered by the user */
        let newURL = e.target.value;
        
        /*calls the setState function on the parent passing in the image position to update and the new image url entered by user */
        this.props.updateImage(newURL,imageNumber)
    }

    render() {
        return(
        <div className="selectionArea">
          <p>Image 1:</p>
          <input type="text" placeholder="Please enter here..." onChange={this.handleChange} /*value={this.props.images[0]*}*/ id={0} />
          <p>Image 2:</p> 
          <input type="text" placeholder="Please enter here..." onChange={this.handleChange} /*value={this.props.images[1]}*/ id={1} />
          <p>Image 3:</p>
          <input type="text" placeholder="Please enter here..." onChange={this.handleChange} /*value={this.props.images[2]}*/ id={2} />  
        </div>
        );
    }
}