import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
//import AppIcon from "../images/icon.png";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import axios from "axios";
const instance = axios.create({
    baseURL: "https://asia-east2-dev-gophil-1009.cloudfunctions.net/api",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" }
});

const token =
    "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZhMWQ3NzBlZWY5ZWFhNjU0MzY1ZGE5MDhjNDIzY2NkNzY4ODkxMDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGV2LWdvcGhpbC0xMDA5IiwiYXVkIjoiZGV2LWdvcGhpbC0xMDA5IiwiYXV0aF90aW1lIjoxNTcxMzAyMzkyLCJ1c2VyX2lkIjoiajZGN05Ha1FlNmJKRW1xQ1hoMW5Vem9pY0xXMiIsInN1YiI6Imo2RjdOR2tRZTZiSkVtcUNYaDFuVXpvaWNMVzIiLCJpYXQiOjE1NzEzMDIzOTIsImV4cCI6MTU3MTMwNTk5MiwiZW1haWwiOiJ0cnlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRyeUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ZvDKrTzntqZlbIifrAD0eSZQyZhw2yAFcjDGa7IsManJCGM5BL8mKmITwIa8bAB4GCgYWow3_EFjCAUTraNlkB3A-TfSS4_7dPXATr_XOV5bvLoF_qz9C-GE3kUMqpOYgjj321_6Ztzuk4NFMqea-oHFkASBREMv4-qFJhE5a8bCIhFFJwaZnOB6-_tPhnGyLnGhXflOwZD3nyp2dKNur7UJHknCQUPF8jNoN0mS0SLJegI5QqBFkJWeeH3QupjF4z5qy3t6_HLSNOp9s90Suh7GBAndLkoHZ0EFBveBvSgOguKqUkWk93VMLHubD1aUwaCmnSon0NG5p_-8ia5vtA";
instance.defaults.headers.common["Authorization"] = token;
instance.defaults.headers.post["Content-Type"] = "application/json";

class login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const userData = {
            email_address: this.state.email,
            password: this.state.password
        };

        axios
            .post("/login", userData)
            .then(res => {
                console.log(res.data);
                this.setState({
                    loading: false
                });
                this.props.history.push("/dashboard");
            })
            .catch(err => {
                // console.log(err);
                // this.setState({
                //     errors: err.data,
                //     loading: false
                // });
            });
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        const { classes } = this.props;
        const { loading } = this.state;

        return (
            <Grid container>
                <Grid item sm />
                <Grid item sm>
                    {/* <img src={AppIcon} alt="monkey" className={classes.image} /> */}
                    <Typography variant="h2">Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            // helperText={errors.email_address}
                            // error={errors.email ? true : false}
                            value={this.state.email}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            // helperText={errors.password}
                            // error={errors.password ? true : false}
                            value={this.state.password}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        {/* {errors.general && (
                            <Typography variant="body2">
                                {errors.general}
                            </Typography>
                        )} */}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={loading}
                        >
                            Login
                            {loading && <CircularProgress size={30} />}
                        </Button>
                    </form>
                </Grid>
                <Grid item sm />
            </Grid>
        );
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
    // loginUser: PropTypes.func.isRequired,
    // user: PropTypes.object.isRequired,
    // UI: PropTypes.object.isRequired
};

// const mapStateToProps = state => ({
//     user: state.user,
//     UI: state.UI
// });

// const mapActionsToProps = {
//     loginUser
// };

export default login;
