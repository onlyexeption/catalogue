import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import LoginView from './components/login/loginView'
import RegisterView from './components/register/registerView'
// import CreateArticleView from './Views/createArticleView'
// import ContactView from './Views/contactView'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={LoginView}/>
    <Route path="/register" component={RegisterView}/>
  </Router>
), document.getElementById('catalogue-app'));