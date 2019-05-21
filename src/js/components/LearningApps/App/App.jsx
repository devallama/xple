import React from 'react';

import { StyleSheetManager } from "styled-components"
import Frame, { FrameContextConsumer } from 'react-frame-component';

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
                <FrameContextConsumer>
                    {frameContext => (
                        <StyleSheetManager target={frameContext.document.head}>
                            <React.Fragment>
                                <Api app={app.path}>
                                    <Component key={app.name} />
                                </Api>
                            </React.Fragment>
                        </StyleSheetManager>
                    )}
                </FrameContextConsumer>
            </Frame>
        );
    }
}

export default App;