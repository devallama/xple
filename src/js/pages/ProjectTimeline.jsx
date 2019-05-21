import React from 'react';
import { Link } from 'react-router-dom';

import Timeline from 'Components/Timeline/Timeline';

class PageTimeline extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="column medium-6">
                        <h1 className="icon-title icon-title--timeline">Timline</h1>
                    </div>
                    <div className="column medium-6 text-right">
                        <Link to={`/project/${this.props.computedMatch.params.projectId}/milestones`} className="btn btn--small btn--primary btn--primary m-t-1">
                            View all milestones
                        </Link>
                    </div>
                </div>
                <div className="row column main-content">
                    <Timeline />
                </div>
            </div>
        );
    }
}

export default PageTimeline;