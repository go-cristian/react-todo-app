import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import TodoListContainer from '../../containers/TodoListContainer';
import Home from '../Home/Home';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const App = ({ classes }) => (
  <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.flex} variant="title" color="inherit">
            React Todo App
          </Typography>
          <Button component={Link} color="inherit" to="/">
            Home
          </Button>
          <Button component={Link} color="inherit" to="/todos">
            Todos
          </Button>
        </Toolbar>
      </AppBar>

      <Route exact path="/" component={Home} />
      <Route path="/todos" component={TodoListContainer} />
    </div>
  </Router>
);

export default withStyles(styles)(App);
