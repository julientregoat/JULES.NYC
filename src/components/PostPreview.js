import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import Post from './Post';

const PostPreview = (props) => (
  <List.Item className="post-preview">
    <h3>{props.title}</h3>
    <p>{props.date}</p>
    <Link to={"/post/" + props.id}>View</Link>
  </List.Item>
);

export default PostPreview;
