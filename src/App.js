import React, { Component } from 'react';

import PageBanner from './page_banner.js';
import PageIntro from './page_intro.js';
import RoundImage from './image_round.js';

import HeaderImg from './img/deepspace.png';
import Gmail from './img/gmail.png';
import Twitter from './img/twitter.png';
import Github from './img/github.png';
import Linkedin from './img/linkedin.png';

import './App.css';

class App extends Component {
  render() {

    const buttonStyle = {
      margin: 'auto',
      width: '70%',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-evenly',
    }

    return (
      <div className="App">
        <PageBanner
          img={HeaderImg}
          bannerText="Clayton Schneider"
        />
        <PageIntro
          introText="Web Developer and Bioinformatician"
          introSubText=""
        />
        <div style={buttonStyle}>
          <a href="mailto:claytonjschneider@gmail.com" target="_blank">
            <RoundImage
              img={HeaderImg}
              logo={Gmail}
            />
          </a>
          <a href="https://github.com/claytonjschneider">
            <RoundImage
              img={HeaderImg}
              logo={Github}
            />
          </a>
          <a href="https://www.linkedin.com/in/claytonjschneider">
            <RoundImage
              img={HeaderImg}
              logo={Linkedin}
            />
          </a>
          <a href="https://twitter.com/ClaytonGoob">
            <RoundImage
              img={HeaderImg}
              logo={Twitter}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
