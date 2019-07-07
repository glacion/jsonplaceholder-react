import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from './Post';
import CommentList from '../comment';

const PostDetail = ({
  comments, post, loading, error,
}) => {
  if (loading) return <div>Loading...</div>;
  if (error !== '') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <div>
      <Post post={post} />
      <CommentList comments={comments} />
    </div>
  );
};

PostDetail.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

// Not necessary unless the client directly asks for the post detail,
// Even then, it won't be shown, it is only here to satisfy propTypes.
PostDetail.defaultProps = {
  post: {
    title: 'Loading...',
    body: 'Loading...',
  },
};

const selectPost = (posts, postId) => posts.find(post => post.id.toString() === postId);
const filterComments = (comments, id) => comments.filter(({ postId }) => postId.toString() === id);

const mapStateToProps = (
  {
    posts, comments, loading, error,
  },
  {
    match: {
      params: { postId },
    },
  },
) => ({
  loading,
  error,
  post: selectPost(posts, postId), // Get the post with the given id.
  comments: filterComments(comments, postId), // Get comments that belong to this post.
});

export default connect(mapStateToProps)(PostDetail);
