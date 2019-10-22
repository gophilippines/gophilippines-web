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
function CallToAction() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item md={6}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </Grid>
            <Grid item md={6}>
                <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
        </Grid>
    );
}

export default CallToAction;
