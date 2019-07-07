import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Post from './Post';

const PostList = ({ loading, error, posts }) => {
  if (loading) return <div>Loading...</div>;
  if (error !== '') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return posts.map(post => (
    <span key={post.id}>
      <Post post={post} />
      <Link to={`/${post.id}`}>
        <button type="button">{post.id}</button>
      </Link>
    </span>
  ));
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
