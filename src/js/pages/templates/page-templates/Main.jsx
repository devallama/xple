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

        this.state = {
            isSidebarCollapsed: true
        };
    }

    componentWillUpdate(nextProps) {
        if (nextProps.computedMatch.params.projectId) {
            this.props.locationSetProjectId(nextProps.computedMatch.params.projectId);
        }
    }

    toggleSidebar = () => {
        this.setState({
            isSidebarCollapsed: !this.state.isSidebarCollapsed
        }, () => {
            if (this.state.isSidebarCollapsed) {
                document.body.classList.remove('sidebar-visible');
            } else {
                document.body.classList.add('sidebar-visible');
            }
        });
    }

    render() {
        const PageComponent = this.props.component;

        return (
            <div className="page">
                <Topbar isSidebarVisible={true} toggleSidebar={this.toggleSidebar} isSidebarCollapsed={this.state.isSidebarCollapsed} />
                <main className="page-body">
                    <Sidebar isProjectPage={this.props.computedMatch.path.split('/')[1].toLowerCase() == 'project'}
                        projectId={this.props.computedMatch.params.projectId} isCollapsed={this.state.isSidebarCollapsed}
                        toggleSidebar={this.toggleSidebar}
                    />
                    <div className="content main">
                        <div className="row column">
                            <PageComponent {...this.props} />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

Main.propTypes = {
    locationSetProjectId: PropTypes.func.isRequired
};

export default connect(null, { locationSetProjectId })(Main);