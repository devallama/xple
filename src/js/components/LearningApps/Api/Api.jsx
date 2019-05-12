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
        if (Object.keys(this.props.db).length == 0) { return null; }

        const component = React.cloneElement(this.props.children, {
            db: this.props.db
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
        db: state.appDB.db
    });
};

export default connect(mapStateToProps, { appDBFetch })(Api);