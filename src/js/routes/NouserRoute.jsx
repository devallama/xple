import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userIsLoggedIn } from 'Actions/user-actions';

import BaseRoute from 'Routes/Route';

class NouserRoute extends Route {
    constructor(props) {
        super(props);

        this.props.userIsLoggedIn();
    }

    render() {
        const { props } = this;

        if (props.user.isLoggedIn == false) {
            return (
                <BaseRoute {...props} component={props.component} title={props.title} />
            );
        } else if (props.user.isLoggedIn == true) {
            return (
                <Redirect to={this.props.redirect || "/"} />
            );
        } else {
            return null;
        }
    }
}

NouserRoute.propTypes = {
    userIsLoggedIn: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    user: state.user
});


export default connect(mapStateToProps, { userIsLoggedIn })(NouserRoute);