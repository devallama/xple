import React from 'react';

import Frame from 'react-frame-component';

import Api from '../Api/Api';

class App extends React.Component {
    render() {
        const { app } = this.props;
        const Component = require('LearningApps/' + app.appFile).default;

        let stylesheets = [];

        if (app.useXpleStyling) {
            stylesheets.push(
                <link rel="stylesheet" href="/assets/css/style.css" />
            );
        }
        if (app.stylesheet) {
            stylesheets.push(
                <link rel="stylesheet" href={`/assets/css/learning-apps/${app.path}/${app.stylesheet}.css`} />
            );
        }

        return (
            <Frame title={app.name} head={stylesheets} className="app-frame">
                <Api app={app.path}>
                    <Component />
                </Api>
            </Frame>
        );
    }
}

export default App;