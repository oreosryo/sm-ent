import React, { Component } from 'react';

/*import custom components */
import LandingComponent from './components/LandingComponent';
import AboutComponent from './components/AboutComponent';
import Timeline from './components/Timeline';
import FinancialHistoryComponent from './components/FinancialHistoryComponent';
import MenuComponent from './components/MenuComponent';
import VRComponent from './components/VRComponent';

/* import styles */
import './App.css';

class App extends Component {
  render() {
    let clearStyles = {
      clear: "both"
    };
    return (
      <div id="app-container">
        <LandingComponent />
        <div style={clearStyles}></div>
        <AboutComponent />
        <Timeline />
        <FinancialHistoryComponent />
        <VRComponent />
        <MenuComponent />
      </div>
    );
  }
}

export default App;
