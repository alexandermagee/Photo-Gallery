import React from 'react';

export class Display extends React.Component {
    render(){
        return(
<div className="galleryTotal">
    <button>⬅️</button>
    <img src={this.props.image1} alt="" className="displayHolder"/>
    <button>➡️</button>
</div>
        );
    }
}