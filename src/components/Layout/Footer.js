import React from "react";

//MUI
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";

//MUI Icons
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function StickyFooter() {
    return (
        <footer className="footer">
            <Container className="container">
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Typography variant="h6" className="mb-3">
                            About
                        </Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" className="mb-3">
                            Contact
                        </Typography>
                        <ListItemText href="#simple-list">
                            <MailIcon className="mr-2" />
                            <span>sample@mail.com</span>
                        </ListItemText>
                        <ListItemText href="#simple-list">
                            <PhoneIcon className="mr-2" />
                            <span>(123) 123-3154</span>
                        </ListItemText>
                        <ListItemText href="#simple-list">
                            <LocationOnIcon className="mr-2" />
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry
                        </ListItemText>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" className="mb-3">
                            Terms
                        </Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Grid>
                    <Grid item xs={3}>
                        <form className="form-inline mb-3">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control mr-1"
                                    placeholder="Subscribe"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                <TwitterIcon />
                            </a>
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                <MailIcon />
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}
