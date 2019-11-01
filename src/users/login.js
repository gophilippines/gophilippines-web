import React, { Component } from "react";
import PropTypes from "prop-types";

// MUI Stuff
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

//Redux
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

class login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors });
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        const userData = {
            email_address: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData, this.props.history);
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        const {
            UI: { loading }
        } = this.props;
        const { errors } = this.state;

        return (
            <Row>
                <Col sm />
                <Col sm>
                    {/* <img src={AppIcon} alt="monkey" className={classes.image} /> */}
                    <h2>Login</h2>
                    <Form noValidate onSubmit={this.handleSubmit}>
                        <Form.Control
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            helperText={errors.email_address}
                            error={errors.email_address ? true : false}
                            value={this.state.email}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <Form.Control
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            value={this.state.password}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        {errors && (
                            <h5 className="text-danger">{errors.General}</h5>
                        )}
                        {errors.Error && (
                            <h5 className="text-danger">{errors.Error}</h5>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={loading}
                        >
                            Login
                            {loading && <Spinner animation="border" />}
                        </Button>
                    </Form>
                </Col>
                <Col sm />
            </Row>
        );
    }
}

login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    loginUser
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(login);
