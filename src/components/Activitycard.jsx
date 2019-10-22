import React from "react";
//MUI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
//import Button from "@material-ui/core/Button";
//MUI Cards
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

//className='no-gutter'
function Topactivity() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={require("../assets/img/paella.jpg")}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant=""></Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid container spacing={3}>
                        <Grid item xs={8} className="text-success">
                            <span>P 3,000 </span> | <small>Available</small>
                        </Grid>
                        <Grid item xs={4} className="text-right text-warning">
                            <StarIcon /> 4.3
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

export default Topactivity;
