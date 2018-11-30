import React, {Component} from 'react';
import '../css/VRComponent.css';
import vrIcon from '../assets/icons/VR.svg';

class VRComponent extends Component {
    render() {
        return (
            <div id="VRFrame">
                <img class="vr-icon" src={vrIcon} alt="VR"/>
                {/*<iframe frameBorder="0" title="SM Family VR Experience" src="../sm-360/index.html"/>*/}
                {/* Development purposes only */}
                <iframe frameBorder="0" title="SM Family VR Experience" src="http://localhost:8081/index.html"/>
            </div>
        );
    }
}

export default VRComponent;