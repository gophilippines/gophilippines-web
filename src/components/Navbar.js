import React from 'react'
import {Link} from 'react-router-dom';

//MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        toolbarTitle: {
          flexGrow: 1,
        },
}));

//className='no-gutter'
function Navbar() {
        const classes = useStyles();
        return (
        <AppBar position="relative"  color="default"elevation={5}>
        <Container className='no-gutter'>
                <Toolbar>
              <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                Go Philippines
              </Typography>
              <nav>
                    <Link variant="button" color="textPrimary" to="/login">Login</Link>
                    <Link variant="button" color="textPrimary" to="/signup">signup</Link>
                </nav>
                </Toolbar>
        </Container>
        </AppBar>
        )
}

export default Navbar
