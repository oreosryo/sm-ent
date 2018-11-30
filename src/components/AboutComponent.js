import React, {Component} from 'react';

/* import css */
import '../css/AboutComponent.css';

/*import images */
import smPartners from '../assets/branding/sm-global-networks.jpg';
import openExternal from '../assets/icons/open-external.svg';

class AboutComponent extends Component {
    render(){
        return (
            <div id="about">
                <div className="title">
                    ABOUT
                </div>
                <div className="content-container">
                    <div className="content">
                        SM Entertainment is a South Korean entertainment management company started by Lee Soo Man in 1995. 
                        It is currently known as one of the “Big Three” entertainment companies in South Korea (the others being YG Entertainment and JYP Entertainment). 
                        <br/>
                        <br/>
                        SM Entertainment is a major contributor to the Korean music industry and is credited with being a part of spreading K-Pop globally, with partners across the world.
                        <img src={smPartners} className="image-stretch" alt="SM Global partner networks in "/>
                        <div className="image-stretch-caption">Global Partner Network (credit: SM Entertainment)</div>
                        <div className="center-text">
                            <a href="https://en.wikipedia.org/wiki/SM_Entertainment" target="_blank" rel="noopener noreferrer">
                                Read more about the company on Wikipedia <img src={openExternal} alt="open external link"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default AboutComponent;