import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
            <Header/>
        </div>

        <p className="App-intro">
          sdafsad, edit <code>src/App.js</code> and save to reload.
        </p>

        <p className="App-footer">
          <Footer/>
        </p>
      </div>
    );
  }
}

export default App;
