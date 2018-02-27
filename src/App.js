import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header'
import Main from './components/Main'
import Post from './components/Post'

class App extends Component {
  state = {
    mediumPosts: []
  }

  storePosts = (posts) => {
    console.log(posts)
    this.setState({mediumPosts: posts})
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Main} storePosts={this.storePosts}/>
            <Route exact path="/post/:id" component={Post}/>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
