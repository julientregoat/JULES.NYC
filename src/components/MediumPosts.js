import React from 'react'
import PostPreview from './PostPreview'
import { Grid, Loader, List } from 'semantic-ui-react'

const parseString = require('xml2js').parseString;

export default class MediumPosts extends React.Component {
  state = {
    posts: [],
    loading: true
  }
  componentDidMount(){
    this.getPosts()
  }

  showPosts = (postsJSON) => {
    let postAry = []
    let i = 0
    postsJSON.forEach(postJSON => {
      let post = {
        id: i++,
        title: postJSON.title.join(),
        date: postJSON.pubDate.join(),
        body: postJSON['content:encoded'].join()
      }
      postAry.push(post)
    })
    this.setState({posts: [...postAry], loading: false})
  }

  getPosts = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@jtregoat')
    .then(res => res.text()).then(xmlString => {
      parseString(xmlString, (err, result) => {
        let postsJSON = result.rss.channel[0].item
        this.showPosts(postsJSON)
      })
    })
  }

  render(){
    return (
      <Grid.Column>
        <h2 className='column-header'> Blog Posts on Medium </h2>
        <List relaxed>
          {this.state.loading ? <Loader className='column-loader' active/> : this.state.posts.map(post => <PostPreview key={post.id} id={post.id} title={post.title} date={post.date} clickHandler={this.handleClick}/>)}
        </List>
      </Grid.Column>
    )
  }
}
