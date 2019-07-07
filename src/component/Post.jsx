import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post: { title, body } }) => (
  <div style={{ padding: '4px', border: '1px red solid' }}>
    {title}
    <hr />
    {body}
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
