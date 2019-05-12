import React from 'react';
import { Link } from 'react-router-dom';
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
            let cards = <p className="size-large">No learning apps available.</p>;

            if (this.props.apps.length > 0) {
                cards = this.props.apps.map(app => (
                    <div className="card__item">
                        <Link to={`learning-apps/${app.path}`} className="link link--black card__link" >
                            <h2 className="card__title">{app.name}</h2>
                            <p className="size-large">{app.description}</p>
                            <img className="card__icon" src="/assets/icons/arrow-cta.svg" alt="Go" />
                        </Link>
                    </div>
                ));
            }

            return (
                <div className="card__grid">
                    {cards}
                </div>
            );
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