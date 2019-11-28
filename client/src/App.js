import React from 'react';
import{ BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './components/navBar';
// import Contact from './pages/Contact';
// import About from './pages/About'
import Profile from './pages/ProfileRocio';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Nav></Nav>
      <Profile></Profile>
            </div>
  );
}

export default App;
