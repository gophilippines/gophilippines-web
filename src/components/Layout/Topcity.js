import React from "react";

//MUI
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));

//className='no-gutter'
function Topcity() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
        </Grid>
    );
}

export default Topcity;
