import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Light from './components/Light';
import Moires from './components/Moires';
import Plants from './components/Plants';
import Sax from './components/Sax';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/light'>
          <Light />
        </Route>
        <Route path='/moires'>
          <Moires />
        </Route>
        <Route path='/plants'>
          <Plants />
        </Route>
        <Route path='/saxophone'>
          <Sax />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      {/* <div className='container'>

      <div className='element'></div>
    </div> */}
      {/* <div className='container2'></div> */}
      {/* <div className="cool rainbow">
      <a href="https://codepen.io/clawtros/pen/rLwGpW" className="linky">Iteration of a super coooooool code sample by </a>
      <a href="http://www.removablefeast.com/#drip" className="clawtros">clawtros</a>
    </div> */}
      {/* <div id='wave-container'>
      <div id='wave'></div>
    </div> */}
    </Router>
  );
}

export default App;
