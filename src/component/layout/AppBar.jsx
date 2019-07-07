import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default () => (
  <AppBar position="sticky" color="primary">
    <Toolbar>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button>
          <Typography variant="h6" color="textPrimary">
            JsonPlaceHolder
          </Typography>
        </Button>
      </Link>
    </Toolbar>
  </AppBar>
);
