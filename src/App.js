import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Page from './components/Page';
import Adrienne from './pages/Adrienne';
import Home from './pages/Home';
import Hobbies from './pages/Hobbies';
import Services from './pages/Services';
import Dancing from './pages/Dancing';
import DJing from './pages/DJing';
import Light from './pages/Light';
import Travel from './pages/Travel';
import Nature from './pages/Nature';
import Sax from './pages/Sax';
import Waves from './components/Waves';
import Thrifting from './pages/Thrifting';
import Coding from './pages/Coding';
import YouTube from './pages/YouTube';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/services'>
          <Page title={'Services'} noRainbow>
            <Services />
          </Page>
        </Route>
        <Route path='/🙋🏻'>
          <Page title={'Hello friend!'}>
            <Adrienne />
          </Page>
        </Route>
        <Route path='/hobbies'>
          <Hobbies />
        </Route>
        <Route path='/dancing'>
          <Page title={'Dancing'}>
            <Dancing />
          </Page>
        </Route>
        <Route path='/djing'>
          <Page title={'DJing'}>
            <DJing />
          </Page>
        </Route>
        <Route path='/light'>
          <Page title={'Psychedelic Light Shows'}>
            <Light />
          </Page>
        </Route>
        <Route path='/waves'>
          <Waves />
        </Route>
        <Route path='/travel'>
          <Page title={'Travel'}>
            <Travel />
          </Page>
        </Route>
        <Route path='/nature'>
          <Page title={'Nature'}>
            <Nature />
          </Page>
        </Route>
        <Route path='/sax'>
          <Page title={'Saxophone'}>
            <Sax />
          </Page>
        </Route>
        <Route path='/coding'>
          <Page title={'Coding'}>
            <Coding />
          </Page>
        </Route>
        <Route path='/thrifting'>
          <Page title={'Thrifting'}>
            <Thrifting />
          </Page>
        </Route>
        <Route path='/youtube'>
          <Page title={'🐸'}>
            <YouTube />
          </Page>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
