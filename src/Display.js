import React from 'react';

export class Display extends React.Component {


    handleClick = e => {
        /* back button contains id value of -1; forward buttons contains 1. This value is accessed onClick and converted to integer */
        let incrementDirection = parseInt((e.target.id),10);

        /* the current state of activeImage (default 0) is read and the incrementDirection applied */
        let incrementedIndex = ((this.props.activeImage)+incrementDirection);

        /*after applying the last selected increment to the current activeImage index point, this new value is sent to the setState function on the parent */
        this.props.updateActiveImage(incrementedIndex);
    }

    render(){
        return(
            <div>
<div className="galleryTotal">
    <button id={-1} onClick={this.handleClick}>⬅️</button>
    <img src={this.props.image} alt="" className="displayHolder"/>
    <button id={1} onClick={this.handleClick}>➡️</button>
</div>
<p>Image {this.props.activeImage+1} of {((this.props.images).length)}</p>
</div>
        );
    }
}

