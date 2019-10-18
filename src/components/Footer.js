import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <footer className={classes.footer}>
        <Container className="container">
        <Grid container spacing={3}>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>



        </Container>
      </footer>
    </div>
  );
}
