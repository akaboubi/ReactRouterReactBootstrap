import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button,Table} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Match, Miss} from 'react-router';
import Contact from './Contact';
import About from './About';
import searchPiker from './searchPiker';


class MenuTop extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2></h2>
        </div>
        
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
               <Link to="/">Demo Site</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
           <NavItem eventKey={1}>
                <Link to="/searchPiker">Search</Link>
            </NavItem>
            <NavItem eventKey={1}>
                <Link to="/about">About</Link>
            </NavItem>
            <NavItem eventKey={2}>  <Link to="/contact">Contact</Link></NavItem>
            <NavDropdown eventKey={3} title="Distribution" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

      </div>
      
    );
  }
}

export default MenuTop;
