import React from 'react';

import logo from './logo.svg';
import './App.css';
import LoginControl from './LoginControl.js';

import firebase from "firebase";

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  // };

  render() {
    const firebaseApp = firebase.apps[0];

    <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LoginControl></LoginControl>
        </header>
        <code>
            <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
        </code>
      </div>
    );
  }
}

export default App;
