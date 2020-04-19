import React from 'react';

export class Display extends React.Component {

    componentDidMount() {
        console.log((this.props.images).length)
    }

    handleClick = e => {
        let incrementDirection = parseInt((e.target.id),10);
        let incrementedIndex = ((this.props.activeImage)+incrementDirection);
        /* let currentArrayIndex = this.props.activeImage;
        console.log("current : " + currentArrayIndex);
        let maxIndex = ((this.props.images).length-1);
        let incrementedArrayIndex = (currentArrayIndex+incrementDirection);
        console.log("incremented: " + incrementedArrayIndex);

        if(incrementedArrayIndex<0){
            incrementedArrayIndex = maxIndex;
        } else if(incrementedArrayIndex>maxIndex){
            incrementedArrayIndex = 0;
        } */

        this.props.updateActiveImage(incrementedIndex);
    }

    render(){
        return(
<div className="galleryTotal">
    <button id={-1} onClick={this.handleClick}>⬅️</button>
    <img src={this.props.image} alt="" className="displayHolder"/>
    <button id={1} onClick={this.handleClick}>➡️</button>
</div>
        );
    }
}