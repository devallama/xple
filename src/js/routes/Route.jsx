import React from 'react';
import PropTypes from 'prop-types';
import { Route as BaseRoute } from 'react-router-dom';
import { connect } from 'react-redux';
import { userFetch } from 'Actions/user-actions';

import Page from 'Pages/templates/Page';

class Route extends BaseRoute {
    constructor(props) {
        super(props);

        if (props.userIsLoggedIn) {
            this.props.userFetch();
        }
    }

    render() {
        const { props } = this;

        return (
            <Page {...props} />
        );
    }
}


Route.propTypes = {
    userFetch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user
});


export default connect(mapStateToProps, { userFetch })(Route);