import React, {Component} from 'react';

/* import styles */
import '../css/MenuComponent.css';

/* import images */
import smLogo from '../assets/branding/sm-ent.svg';
import hamburger from '../assets/icons/hamburger.svg';

class MenuComponent extends Component {
    constructor() {
        super(); 
        this.state = {
            isMenuHidden: true
        }
    }

    toggleMenu() {
        console.log(this.state.isMenuHidden);
        this.setState(
            {
                isMenuHidden: !this.state.isMenuHidden
            }
        )
    }
    
    render() {
        return (
            <div id="menu">
                <div id="menu-bar">
                    <div className="branding">
                        <img src={smLogo} alt="SM Entertainment" />
                        <div className="tagline">An Interactive History</div>
                    </div>
                    <div className="desktop menu-items">
                        <div className="menu-item"><a href="#about">About</a></div>
                        <div className="menu-item"><a href="#timeline-container">Timeline</a></div>
                        <div className="menu-item"><a href="#financial-history">Financial History</a></div>
                        <div className="menu-item"><a href="#VRFrame">SM Family</a></div>
                    </div>
                    <img className="hamburger-icon" src={hamburger} alt="Expand menu" onClick={this.toggleMenu.bind(this)}/>
                </div>
                {!this.state.isMenuHidden && 
                    (<div className="menu-items">
                    <div className="menu-item"><a href="#about" onClick={this.toggleMenu.bind(this)}>About</a></div>
                    <div className="menu-item"><a href="#timeline-container" onClick={this.toggleMenu.bind(this)}>Timeline</a></div>
                    <div className="menu-item"><a href="#financial-history" onClick={this.toggleMenu.bind(this)}>Financial History</a></div>
                    <div className="menu-item"><a href="#VRFrame" onClick={this.toggleMenu.bind(this)}>SM Family</a></div>
                    </div>)
                }
            </div>
        );
    }
}

export default MenuComponent;