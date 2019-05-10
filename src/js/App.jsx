import React from 'react';
import PropTypes from 'prop-types';
import Router from './Router/Router';
import { connect } from 'react-redux';
import { firebaseFetchInstance } from 'Actions/firebase-actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.props.firebaseFetchInstance();
    }

    render() {
        return (
            <Router />
        )
    }
}

App.propTypes = {
    firebaseFetchInstance: PropTypes.func.isRequired,
    firebase: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    firebase: state.firebase.instance
});

export default connect(mapStateToProps, { firebaseFetchInstance })(App);