import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment: { name, email, body } }) => (
  <div>
    {body}
,
    {email}
,
    {name}
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
