import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Confirmation from './components/Confirmation';
import HomePage from './components/HomePage/HomePage.js';
import Search from './components/Search';

const SiteRoutes = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <App>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/search' component={Search}/>
        <Route path='/confirmation' component={Confirmation}/>
      </Switch>
    </App>
  </BrowserRouter>
  );

export default SiteRoutes;
