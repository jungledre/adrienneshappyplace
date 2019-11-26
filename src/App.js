import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Dancing from './components/Dancing';
import DJing from './components/DJing';
import Light from './components/Light';
import Moires from './components/Moires';
import Plants from './components/Plants';
import Sax from './components/Sax';
import Thrifting from './components/Thrifting';
import Technology from './components/Technology';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/dancing'>
          <Dancing />
        </Route>
        <Route path='/djing'>
          <DJing />
        </Route>
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
        <Route path='/technology'>
          <Technology />
        </Route>
        <Route path='/thrifting'>
          <Thrifting />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </Router>
  );
}

export default App;
