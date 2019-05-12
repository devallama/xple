import React from 'react';

import Timeline from 'Components/Timeline/Timeline';

class PageTimeline extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="column medium-6">
                        <h1 className="icon-title icon-title--timeline">Timline</h1>
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