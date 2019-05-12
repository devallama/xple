import React from 'react';

import Milestones from 'Components/Milestones/Milestones';

class PageMilestones extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="column medium-6">
                        <h1 className="icon-title icon-title--milestones">Milestones</h1>
                    </div>
                </div>
                <div className="row column main-content">
                    <Milestones />
                </div>
            </div>
        );
    }
}

export default PageMilestones;