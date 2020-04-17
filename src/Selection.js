import React from 'react';

export class Selection extends React.Component {

    handleChange = e => {
        let newURL = e.target.value;
        this.props.updateImage(newURL)
    }

    render() {
        return(
        <div className="selectionArea">
          <input type="text" placeholder="Please enter here..." onChange={this.handleChange} value={this.props.image1} /> 
        </div>
        );
    }
}