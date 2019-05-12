import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { projectFetch } from 'Actions/project-actions';
import { milestonesFetch } from 'Actions/milestone-actions';

import cn from 'classnames';
import dayjs from 'dayjs';

import Milestone from './Milestone/Milestone';

class Timeline extends React.Component {
    constructor(props) {
        super(props);

        this.props.projectFetch(this.props.projectId);
        this.props.milestonesFetch(this.props.projectId);
    }

    render() {
        console.log(this.props.milestones);

        const { project } = this.props;

        const startDate = dayjs(project.startDate);
        const endDate = dayjs(project.endDate);

        const monthDifference = endDate.diff(startDate, 'month');
        const dayDifference = endDate.diff(startDate, 'day');

        console.log(monthDifference);

        let timelineSegments = [];

        for (let i = 0; i <= monthDifference; i++) {
            const date = dayjs(startDate).add(i, 'month');
            let height = '17.5';

            if (i == 0) {
                height = ((startDate.daysInMonth() - date.date()) / startDate.daysInMonth()) * height;
            } else if (i == monthDifference) {
                height = (date.date() / endDate.daysInMonth()) * height;
            }

            timelineSegments.push(
                <div key={i} style={{ height: `${height}rem` }} className={cn("timeline__segment", { "timeline__segment--odd": i % 2 == 0 })}>
                    {i != 0 && (
                        <div className="timeline__segment-label">
                            {date.format('MMM')}
                        </div>
                    )}
                </div>
            )
        }

        const milestones = this.props.milestones.map((milestone, index) =>
            <Milestone key={milestone.id} startDate={startDate} dayDifference={dayDifference} milestone={milestone} index={index} />
        );

        return (
            <div>
                <div className="timeline">
                    <div className="timeline__label m-b-2">
                        Start date
                        <span className="timeline__date">{startDate.format('D MMM YYYY')}</span>
                    </div>
                    <div className="timeline__line">
                        {timelineSegments}
                        <div className="timeline__milestones">
                            {milestones}
                        </div>
                    </div>
                    <div className="timeline__label m-t-2">
                        End date
                        <span className="timeline__date">{endDate.format('D MMM YYYY')}</span>
                    </div>
                    <Link to={`/project/${this.props.projectId}/milestones`} className="btn btn--small btn--primary timeline__btn">
                        View all milestones
                    </Link>
                </div>
            </div>
        );
    }
}

Timeline.propTypes = {
    milestonesFetch: PropTypes.func.isRequired,
    milestones: PropTypes.array.isRequired,
    projectFetch: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return ({
        projectId: state.location.projectId,
        milestones: state.milestone.milestones,
        project: state.project.project
    });
};

export default connect(mapStateToProps, { projectFetch, milestonesFetch })(Timeline);