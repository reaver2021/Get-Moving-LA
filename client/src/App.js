import React from 'react';
import{ BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import About from './pages/About'
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
