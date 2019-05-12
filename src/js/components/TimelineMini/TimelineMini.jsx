import React from 'react';

import cn from 'classnames';
import dayjs from 'dayjs';

import Milestone from './Milestone/Milestone';

class TimelineMini extends React.Component {
    render() {
        const startDate = dayjs(this.props.startDate);
        const endDate = dayjs(this.props.endDate);

        const monthDifference = endDate.diff(startDate, 'month');
        const dayDifference = endDate.diff(startDate, 'day');

        let timelineSegments = [];

        for (let i = 0; i <= monthDifference; i++) {
            const date = dayjs(startDate).add(i, 'month');

            timelineSegments.push(
                <div key={i} className={cn("timeline-mini__segment", { 'timeline-mini__segment-fixed': monthDifference > 2 })}>
                    {i != 0 && (
                        <div className="timeline-mini__segment-label">
                            {date.format('MMM')}
                        </div>
                    )}
                </div>
            )
        }

        const milestones2 = this.props.milestones.map(milestone => {
            const milestoneDate = dayjs(milestone.date);
            const positionX = (milestoneDate.diff(startDate, 'day') / dayDifference) * 100;

            return (
                <button key={milestone.id}
                    className={`timeline-mini__milestone timeline-mini__milestone--${milestone.type}`}
                    style={{ left: `${positionX}%` }}
                    aria-label="Milestone details"
                >
                </button>
            )
        });

        const milestones = this.props.milestones.map(milestone =>
            <Milestone key={milestone.id} startDate={startDate} dayDifference={dayDifference} milestone={milestone} />
        );

        return (
            <div className="timeline-mini">
                <div className="timeline-mini__start-label">
                    Start
                </div>
                <div className="timeline-mini__line">
                    {timelineSegments}
                    <div className="timeline-mini__milestones">
                        {milestones}
                    </div>
                </div>
            </div>
        );
    }
}

export default TimelineMini;