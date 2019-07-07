import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#7f0000',
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
