import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import smLogo from '../assets/branding/sm-ent-white.svg';
import downImg from '../assets/icons/down-arrow.svg';
import smBg from '../assets/branding/sm-ent-about-bg.jpg';
import '../css/LandingComponent.css';

class LandingComponent extends Component {
    render() {
        return (
            <div className="landing-container">
                <Parallax bgImage={smBg} strength={500} bgClassName="parallax-background">
                    <div className="logo">
                        <img src={smLogo} alt="S M Entertainment"/>
                        <div className="tagline">An Interactive History</div>
                    </div>
                    <a className="pulse-down" tabIndex="1" href="#about"><img src={downImg} alt="Down"/></a>
                </Parallax>
            </div>
        );
    }
}

export default LandingComponent;