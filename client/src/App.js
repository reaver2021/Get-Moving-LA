import React from 'react';
import{ BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './components/navBar';
// import Contact from './pages/Contact';
// import About from './pages/About'
import Profile from './pages/ProfileRocio';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/results' component={Results}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path ='/signup' component={SignUp}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
);

export default App;
