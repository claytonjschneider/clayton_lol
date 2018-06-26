import React from 'react';

import './page_banner.css';

import Line from './line.js';
import SelfieImage from './selfie.js';

import Selfie from './img/DSC_0797.png';

class PageBanner extends React.Component {
  render() {

    const divStyle = {
      backgroundImage: "url(" + this.props.img + ")",
      backgroundSize: "cover",
    }

    return (
      <div className="banner" style={divStyle}>

          <h2>
            {this.props.bannerText}
            <Line color='white' />
            <SelfieImage
              img={Selfie}
            />
          </h2>

      </div>
    );
  }
}

export default PageBanner;
