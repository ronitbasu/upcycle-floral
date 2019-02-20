import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Confirmation from './components/Confirmation';

const SiteRoutes = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <App>
      <Switch>
        <Route exact path='/' component={Confirmation}/>
      </Switch>
    </App>
  </BrowserRouter>
  );

export default SiteRoutes;
