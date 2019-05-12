import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userIsLoggedIn } from 'Actions/user-actions';

import BaseRoute from 'Routes/Route';

class ProtectedRoute extends Route {
    constructor(props) {
        super(props);

        this.props.userIsLoggedIn();
    }

    render() {
        const { props } = this;

        if (props.isLoggedIn == true) {
            return (
                <BaseRoute {...props} component={props.component} title={props.title} userIsLoggedIn={props.isLoggedIn} />
            );
        } else if (props.isLoggedIn == false) {
            return (
                <Redirect to={this.props.redirect || "/"} />
            );
        } else {
            return null;
        }
    }
}

ProtectedRoute.propTypes = {
    userIsLoggedIn: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool
}


const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn
});


export default connect(mapStateToProps, { userIsLoggedIn })(ProtectedRoute);