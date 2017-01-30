import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Contact from './Contact';
import logo from './logo.svg';
import './App.css';
import MenuTop from './MenuTop';



class About extends Component {
  render() {
    return (
    
      <div className="App">
        <Jumbotron>
        <h1>Hi, i'm Ali Kaboubi</h1>
        <h2>My linkedin is  https://www.linkedin.com/in/ali-kaboubi-41a32321/</h2>
        <p>I created this simple web site for community to show you how to simply use the <b>React-router 4.0.0-alpha.6 (https://react-router.now.sh/basic)</b> and <b>React-bootstrap (https://react-bootstrap.github.io/)</b>.</p>
        <p>- Create a startup react project using the 2 commands below</p>
        <p className="red-color">
          npm install -g create-react-app
        </p>
        <p className="red-color">
          create-react-app SITEDEMO
        </p>
         <p>- install the  react-router 4.0.0-alpha.6</p>
        <p className="red-color">npm install --save  react-router@4.0.0-alpha.6</p>
        <p> Call two bootstrap css files below in the <b>index.html</b> file</p>
        <p className="red-color">
        https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css
        https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css
        </p>
        <p>Install the <b>react-bootstrap</b> module</p>

        <p className="red-color">npm install react-bootstrap --save</p>
        <p>- You should write the router code in the <b>index.js</b> file </p>
        <p className="red-color"> 
          <b>BrowserRouter</b> and the <b>match</b>
        </p>

        <p>After executing this site on your computer you should execute the npm command below</p>
        <p className="red-color"> 
          <b>npm install</b>
        </p>
        <p>To show the result you should execute the npm cemmand below</p>
        <p className="red-color"> 
          <b>npm start</b>
        </p>
        <p><Button bsStyle="primary">Learn more</Button></p>
       </Jumbotron>
       
      </div>


    );
  }
}

export default About;
