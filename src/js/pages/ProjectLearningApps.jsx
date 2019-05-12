import React from 'react';

import LearningApps from 'Components/LearningApps/LearningApps';

class PageLearningApps extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="column medium-6">
                        <h1 className="icon-title icon-title--learning-apps">Learning Apps</h1>
                    </div>
                </div>
                <div className="row column main-content overflow--hidden">
                    <LearningApps app={this.props.computedMatch.params.learningApp} />
                </div>
            </div>
        );
    }
}

export default PageLearningApps;