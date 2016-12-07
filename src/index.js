import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import LoginPage from './components/login/LoginPage'
import RegisterView from './components/register/registerView'
import PostsView from './components/posts/allPosts'
import CreateForm from './components/createNew/CreatePage'
import DetailsArticles from './components/PostDetails/DetailsView'
import Edit from './components/editPost/EditPage'
// import CreateArticleView from './Views/createArticleView'
// import ContactView from './Views/contactView'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={RegisterView}/>
      <Route path="/posts" component={PostsView}/>
      <Route path="/createNew" component={CreateForm}/>
      <Route path="/viewArticles" component={DetailsArticles}/>
      <Route path="/edit/:postId" component={Edit}/>

  </Router>
), document.getElementById('catalogue-app'));