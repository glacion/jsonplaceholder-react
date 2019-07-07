import Paper from '@material-ui/core/Paper';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';

const Layout = ({ children }) => (
  <Paper>
    <AppBar />
    {children}
  </Paper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
