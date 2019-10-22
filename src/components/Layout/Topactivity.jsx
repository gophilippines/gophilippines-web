import React, { Component } from "react";
import Activitycard from "../Activitycard";
//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Topactivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: [
                { id: 1, name: "test1", price: 20 },
                { id: 2, name: "test2", price: 20 },
                { id: 3, name: "test3", price: 20 },
                { id: 4, name: "test4", price: 20 }
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h5" className="mb-3 text-center">
                    Popular Activities
                </Typography>
                <Grid container spacing={3}>
                    {this.state.activity.map(card => (
                        <Grid item xs={3}>
                            <Activitycard key={card.id} card={card} />
                            counter #{card.id}
                        </Grid>
                    ))}
                </Grid>
            </React.Fragment>
        );
    }
}

export default Topactivity;
