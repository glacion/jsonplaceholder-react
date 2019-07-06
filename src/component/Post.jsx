import React from 'react';
import PropTypes from 'prop-types';

const Post = ({
  post: {
    userId, id, title, body,
  },
}) => <div>{title}</div>;

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
