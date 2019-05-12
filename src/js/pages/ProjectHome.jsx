import React from 'react';

import Frame from 'react-frame-component';

class ProjectHome extends React.Component {
    render() {
        console.log(this);
        return (
            <div>
                Project home

                <Test>
                    <Frame>
                        <Test2 name={"ted"} />
                    </Frame>
                </Test>
            </div>
        );
    }
}

class Test extends React.Component {
    render() {
        console.log(this.props.children);

        return this.props.children;
    }
}

class Test2 extends React.Component {
    render() {
        return (
            <div>
                React component - {this.props.name}
            </div>
        );
    }
}

export default ProjectHome;