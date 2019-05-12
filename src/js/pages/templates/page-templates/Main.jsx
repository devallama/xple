import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { locationSetProjectId } from 'Actions/location-actions';

import Topbar from '../Topbar';
import Sidebar from '../Sidebar';

class Main extends React.Component {
    constructor(props) {
        super(props);

        if (props.computedMatch.params.projectId) {
            this.props.locationSetProjectId(props.computedMatch.params.projectId);
        }
    }

    render() {
        console.log(this.props);
        const PageComponent = this.props.component;
        return (
            <div className="page">
                <Topbar />
                <div className="page-body">
                    <Sidebar isProjectPage={this.props.computedMatch.path.split('/')[1].toLowerCase() == 'project'}
                        projectId={this.props.computedMatch.params.projectId}
                    />
                    <div className="content main">
                        <div className="row">
                            <div className="column">
                                <PageComponent {...this.props} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    locationSetProjectId: PropTypes.func.isRequired
};

export default connect(null, { locationSetProjectId })(Main);