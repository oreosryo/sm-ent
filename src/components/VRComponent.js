import React, {Component} from 'react';
import '../css/VRComponent.css';
import vrIcon from '../assets/icons/VR.svg';
import fullScreen from '../assets/icons/full-screen.svg';

class VRComponent extends Component {
    render() {
        return (
            <div id="VRFrame">
                <div className="title">SM Family</div>
                <br/>
                <img className="vr-icon" src={vrIcon} alt="VR"/>
                <br/>
                <a href="https://oreosryo.github.io/sm-360" className="full-screen-prompt">
                    Enter full-screen mode &nbsp;
                    <img className="full-screen-icon" src={fullScreen} alt="Switch to VR Fullscreen"/>
                </a>
                <iframe frameBorder="0" title="SM Family VR Experience" src="../sm-360/index.html"/>
                {/* Development purposes only */}
                {/*<iframe frameBorder="0" title="SM Family VR Experience" src="http://localhost:8081/index.html"/>*/}
            </div>
        );
    }
}

export default VRComponent;