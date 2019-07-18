import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './layouts/Home';
import Contact from './layouts/Contact';
import Profile from './layouts/Profile';
import Portfolio from './layouts/Portfolio';
import Footers from './layouts/Footers';
import DaftarForm from './layouts/Daftar';
import LoginForm from './layouts/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/portofolio" component={Portfolio}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/daftar" component={DaftarForm}/>
      </Switch>
      <Footers/>
    </BrowserRouter>
  );
}

export default App;
