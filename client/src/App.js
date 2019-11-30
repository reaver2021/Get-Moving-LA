import React from 'react';
import{ BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//import Nav from './components/navBar';
import Search from './pages/Search/Search'
// import Contact from './pages/Contact';
// import About from './pages/About';
import Profile from './pages/ProfileRocio';
import JobResults from './pages/Results/JobResults';
import './App.css';
//import InLine from "./components/InLine";
//import home from './components/home';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/results' component={JobResults}/>
        <Route exact path='/profile' component={Profile}/>
      </Switch>
    </div>
  </Router>
);

export default App;
