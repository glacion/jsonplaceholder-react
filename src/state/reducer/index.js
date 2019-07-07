import action from '../type';

const initialState = {
  posts: [],
  comments: [],
  error: '',
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case action.LOADING:
      return { ...state, loading: true };
    case action.SUCCESSFUL:
      return {
        ...state,
        loading: false,
        posts: payload.posts,
        comments: payload.comments,
      };
    case action.FAILURE:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
};
