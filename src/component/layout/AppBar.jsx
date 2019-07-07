import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Code from '@material-ui/icons/Code';

export default () => (
  <AppBar position="sticky" color="primary">
    <Toolbar>
      <Link to="/" style={{ textDecoration: 'none', marginRight: 'auto' }}>
        <Button>
          <Typography variant="h6" color="textPrimary">
            JsonPlaceHolder
          </Typography>
        </Button>
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/glacion/jsonplaceholder-react"
      >
        <IconButton>
          <Code />
        </IconButton>
      </a>
    </Toolbar>
  </AppBar>
);
