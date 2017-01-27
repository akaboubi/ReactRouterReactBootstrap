import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Router, Match, Miss, Link } from 'react-router';
import './index.css';
import Contact from './Contact';
import About from './About';
import searchPiker from './searchPiker';
import MenuTop from './MenuTop';


const App = () => (

  <BrowserRouter>
    <div className="App">

      <MenuTop /> {/* If none of those match, then a sibling `Miss` will render. */}
      <div className="container">
      <Match exactly pattern="/" component={Home} />
      <Match exactly pattern="/searchPiker" component={searchPiker} />
      <Match exactly pattern="/about" component={About} />
      <Match pattern="/contact" component={Contact} />
      </div>

      {/* If none of those match, then a sibling `Miss` will render. */}
      <Miss component={NoMatch} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
<h2>(: Welcome in the Home page... :)</h2>
  </div>
)

const NoMatch = ({ location }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
)



render(<App />, document.querySelector('#root'))