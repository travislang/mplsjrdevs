import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from './Header';
import Welcome from './Welcome';
import About from './About';
import Events from './Events';
import Community from './Community';
import CodeOfConduct from './CodeOfConduct';
import Contact from './Contact';
import '../styles/App.css';

class App extends Component {
  componentWillMount() {
    ReactGA.initialize('UA-105372704-1');
  }
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div className="App" id="home">
        <Header />
        <Welcome />
        <About />
        <Events />
        <Community />
        <CodeOfConduct />
        <Contact />
      </div>
    );
  }
}

export default App;
