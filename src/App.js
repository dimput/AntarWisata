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
import Blog from './layouts/Blog';
import BlogDetail from './layouts/BlogDetails';

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
        <Route path="/blog" exact component={Blog}/>
        <Route path="/blog/:id" exact component={BlogDetail}/>
      </Switch>
      <Footers/>
    </BrowserRouter>
  );
}

export default App;
