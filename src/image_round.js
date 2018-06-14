import React from 'react';

import './image_round.css';

class RoundImage extends React.Component {
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
          <img src={this.props.logo} className="logo" alt="logo" align="center" />
        </div>
      </div>

    );
  }
}

export default RoundImage;
