import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Post from './Post';

const Posts = ({ loading, error, posts }) => {
  if (loading) return <div>Loading...</div>;
  if (error !== '') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return posts.map(post => <Post key={post.id} post={post} />);
};

Posts.propTypes = {
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

export default connect(mapStateToProps)(Posts);
