import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dancing from './pages/Dancing';
import DJing from './pages/DJing';
import Light from './pages/Light';
import Moires from './pages/Moires';
import Plants from './pages/Plants';
import Sax from './pages/Sax';
import Thrifting from './pages/Thrifting';
import Technology from './pages/Technology';

function App() {

  const rainbow = [
    'Thistle',
    'Lavender Purple',
    'Pastel Violet',
    'Cotton Candy',
    'Lumber'
  ];

  return (
    <Router>
      <div
        className='rainbow-container'
        style={{
          backgroundColor: rainbow[Math.floor(Math.random() * rainbow.length)]
        }}
      >
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
      </div>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </Router>
  );
}

export default App;
