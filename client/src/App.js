import React from 'react';
import{ BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './components/navBar';
// import Contact from './pages/Contact';
// import About from './pages/About';
import Profile from './pages/ProfileRocio';
import JobResults from './pages/Results/JobResults';
import './App.css';
import InLine from "./components/InLine";
import home from './components/home';

class App extends Component {
    render(){ 
  return (
      <div className="App">
          <InLine>
      <header className="App-header">
      </header>
      <Nav></Nav>
      <Profile></Profile>
      </InLine>
      </div>
      </div>
            </div>
  );
}

export default App;
