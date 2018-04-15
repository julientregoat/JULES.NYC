import React from 'react';
import { List } from 'semantic-ui-react'

const PostPreview = (props) => (
  <List.Item onClick={() => window.open(props.link)}className="post-preview">
    <h3><a>{props.title}</a></h3>
    <p>{props.date}</p>
  </List.Item>
);

export default PostPreview;
