import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Posts from './Posts';
import fetchAction from '../action';

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={Posts} />
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
