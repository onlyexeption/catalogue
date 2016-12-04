import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import LoginView from './Views/loginView'
import RegisterView from './Views/registerView'
// import CreateArticleView from './Views/createArticleView'
// import ContactView from './Views/contactView'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/view/login" component={LoginView}/>
    <Route path="/view/register" component={RegisterView}/>
  </Router>
), document.getElementById('catalogue-app'));