import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PostList, PostDetail } from '../post';
import { fetchAction } from '../../state';

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={PostList} />
        <Route path="/:postId" exact component={PostDetail} />
      </Router>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchData: fetchAction,
};

const mapStateToProps = ({ posts, comments }) => ({
  posts,
  comments,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
