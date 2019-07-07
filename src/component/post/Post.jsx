import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';

const Post = ({ post, link }) => (link ? (
  <ListItem button component="a" href={post.id}>
    <ListItemText primary={post.title} secondary={post.body} />
  </ListItem>
) : (
  <ListItem>
    <ListItemText primary={post.title} secondary={post.body} />
  </ListItem>
));

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  link: PropTypes.bool,
};

Post.defaultProps = {
  link: false,
};

export default Post;
