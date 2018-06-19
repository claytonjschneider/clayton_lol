import React from 'react';

import './selfie.css';

class SelfieImage extends React.Component {
  render() {

    const divStyle = {
      backgroundImage: "url(" + this.props.img + ")",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    return (
      <div className="wrapper">
        <div style={divStyle} className="imgDiv">
        </div>
      </div>
    );
  }
}

export default SelfieImage;
