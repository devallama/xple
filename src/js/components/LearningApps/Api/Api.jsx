import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { appDBFetch } from 'Actions/app-db-actions';

class Api extends React.Component {
    constructor(props) {
        super(props);

        this.props.appDBFetch(this.props.app);
    }

    render() {
        console.log(this.props.user);
        if (Object.keys(this.props.db).length == 0) { return null; }

        const { user } = this.props;

        const component = React.cloneElement(this.props.children, {
            db: this.props.db,
            user: {
                name: user.displayName,
                uid: user.uid
            }
        });

        return component;
    }
}

Api.propTypes = {
    appDBFetch: PropTypes.func.isRequired,
    db: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return ({
        db: state.appDB.db,
        user: state.user.user
    });
};

export default connect(mapStateToProps, { appDBFetch })(Api);