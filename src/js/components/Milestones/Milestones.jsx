import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { milestonesFetch } from 'Actions/milestone-actions';

import MilestoneTable from './MilestoneTable/MilestoneTable';

class Milestones extends React.Component {
    constructor(props) {
        super(props);

        this.props.milestonesFetch(this.props.projectId);
    }


    render() {
        const taskMilestones = this.props.milestones.filter(milestone => milestone.type == 'task');
        const milestoneMilestones = this.props.milestones.filter(milestone => milestone.type == 'milestone');
        const deadlineMilestones = this.props.milestones.filter(milestone => milestone.type == 'deadline');

        return (
            <div>
                <MilestoneTable type="task" milestones={taskMilestones} projectId={this.props.projectId} />
                <MilestoneTable type="milestone" milestones={milestoneMilestones} projectId={this.props.projectId} />
                <MilestoneTable type="deadline" milestones={deadlineMilestones} projectId={this.props.projectId} />
            </div>
        );
    }
}

Milestones.propTypes = {
    projectId: PropTypes.string,
    milestonesFetch: PropTypes.func.isRequired,
    milestones: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return ({
        projectId: state.location.projectId,
        milestones: state.milestone.milestones
    });
};

export default connect(mapStateToProps, { milestonesFetch })(Milestones);