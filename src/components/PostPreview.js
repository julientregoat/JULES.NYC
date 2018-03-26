import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

const PostPreview = (props) => (
  <List.Item onClick={() => window.open(props.link)}className="post-preview">
    <h3>{props.title}</h3>
    <p>{props.date}</p>
  </List.Item>
);

export default PostPreview;
