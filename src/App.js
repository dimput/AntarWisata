import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './layouts/Home';
import Contact from './layouts/Contact';
import Profile from './layouts/Profile';
import Portfolio from './layouts/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/portofolio" component={Portfolio}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
