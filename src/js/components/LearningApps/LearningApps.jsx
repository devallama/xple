import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { learningAppsFetch } from 'Actions/learning-app-actions';

import App from './App/App';

class LearningApps extends React.Component {
    constructor(props) {
        super(props);

        this.props.learningAppsFetch();
    }

    render() {
        if (this.props.app && this.props.apps.some(app => app.path == this.props.app)) {
            const app = this.props.apps.find(app => app.path == this.props.app);

            return <App app={app} />
        } else {
            return null;
        }

    }
}

LearningApps.propTypes = {
    learningAppsFetch: PropTypes.func.isRequired,
    apps: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return ({
        apps: state.learningApp.apps
    });
};

export default connect(mapStateToProps, { learningAppsFetch })(LearningApps);