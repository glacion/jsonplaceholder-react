import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography, ListSubheader } from '@material-ui/core';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div>
    <List>
      <ListSubheader>
        <Typography>Comments:</Typography>
      </ListSubheader>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </List>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CommentList;
