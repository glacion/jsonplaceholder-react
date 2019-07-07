import axios from 'axios';
import action from '../type';

const loading = {
  type: action.LOADING,
};

const loaded = (posts, comments) => ({
  type: action.SUCCESSFUL,
  payload: {
    posts,
    comments,
  },
});

const failure = error => ({
  type: action.FAILURE,
  payload: { error },
});

export default () => (dispatch) => {
  dispatch(loading);

  axios
    .all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/comments'),
    ])
    .then(axios.spread((posts, comments) => dispatch(loaded(posts.data, comments.data))))
    .catch(error => dispatch(failure(error.message)));
};
