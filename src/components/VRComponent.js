import React, {Component} from 'react';
import '../css/VRComponent.css';

class VRComponent extends Component {
    render() {
        return (
            <div id="VRFrame">
                <iframe title="SM Family VR Experience" src="../sm-360/index.html"/>
            </div>
        );
    }
}

export default VRComponent;