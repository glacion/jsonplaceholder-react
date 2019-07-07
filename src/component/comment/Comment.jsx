import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Typography } from '@material-ui/core';

const Comment = ({ comment: { name, email, body } }) => (
  <ListItem>
    <ListItemText
      primary={name}
      secondary={(
        <React.Fragment>
          <Typography component="span" variant="subtitle2" color="textPrimary">
            {email}
          </Typography>
          {' -- '}
          {body}
        </React.Fragment>
)}
    />
  </ListItem>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
