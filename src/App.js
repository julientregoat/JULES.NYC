import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header'
import Main from './components/Main'

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
        <Switch>
          <Route path="/" component={Main} storePosts={this.storePosts}/>
        </Switch>
      </div>
    );
  }
}

export default App;
