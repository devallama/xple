import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { projectsFetch } from 'Actions/project-actions';
import { milestonesFetch } from 'Actions/milestone-actions';

import ProjectCard from 'Components/ProjectCard/ProjectCard';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.props.projectsFetch();
        this.props.milestonesFetch();
    }

    render() {
        const projectCards = this.props.projects.map(project => <ProjectCard project={project} key={project.id} milestones={this.props.milestones} />);

        return (
            <div className="project-cards">
                {projectCards}
            </div>
        );
    }
}

Projects.propTypes = {
    projectsFetch: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
    milestonesFetch: PropTypes.func.isRequired,
    milestones: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return ({
        projects: state.project.projects,
        milestones: state.milestone.milestones
    });
};

export default connect(mapStateToProps, { projectsFetch, milestonesFetch })(Projects);