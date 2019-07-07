import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, LinearProgress } from '@material-ui/core';
import Post from './Post';

const PostList = ({ loading, error, posts }) => {
  if (loading) return <LinearProgress />;
  if (error !== '') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <List>
      {posts.map(post => (
        <Post key={post.id} post={post} link />
      ))}
    </List>
  );
};

PostList.propTypes = {
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
  loading: state.loading,
  posts: state.posts,
});

export default connect(mapStateToProps)(PostList);
