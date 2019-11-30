import React from 'react';
import{ BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//import Nav from './components/navBar';
import Search from './pages/Search/Search'
// import Contact from './pages/Contact';
// import About from './pages/About';
import Profile from './pages/ProfileRocio';
import JobResults from './pages/Results/JobResults';
import Place from './pages/Places/Place'
import PlaceResults from './pages/Results/PlaceResults';
import './App.css';
//import InLine from "./components/InLine";
//import home from './components/home';
import NoMatch from './pages/NoMatch/NoMatch'
import {Navbar, Nav} from 'react-bootstrap';



const App = () => (

  <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
            alt=""
            width="30"
            height="30"
            />{' '}
            Get Movin LA!
        </Navbar.Brand>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/placesearch">Find Things to Do!</Nav.Link>
          </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="link-3">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Sign-Up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
                
    <div>
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/results' component={JobResults}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path ='/placesearch' component={Place}/>
        <Route exact path ='/placeresult' component={PlaceResults}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
