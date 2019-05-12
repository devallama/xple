import React from 'react';

import Projects from 'Components/Projects/Projects';

import CreateProjectForm from 'Components/CreateProjectForm/CreateProjectForm';

class PageProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCreateProjectFormVisible: false
        };

        document.body.addEventListener('mousedown', this.closeSidebarOffclick);
    }

    toggleCreateProjectForm = () => {
        this.setState({
            isCreateProjectFormVisible: !this.state.isCreateProjectFormVisible
        }, () => {
            this.state.isCreateProjectFormVisible ? document.body.classList.add('overlay') : document.body.classList.remove('overlay');
        });
    }

    closeSidebarOffclick = event => {
        if (this.state.isCreateProjectFormVisible && event.target == event.currentTarget) {
            this.toggleCreateProjectForm();
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="column medium-6">
                        <h1 className="icon-title icon-title--project">Projects</h1>
                    </div>
                    <div className="column medium-6 text-right">
                        <button type="button" onClick={this.toggleCreateProjectForm} className="btn btn--primary btn--add m-t-1">NEW PROJECT</button>
                    </div>
                </div>
                <div className="row column main-content">
                    <Projects />
                </div>

                {this.state.isCreateProjectFormVisible &&
                    <div className="side-overlay side-overlay--right">
                        <CreateProjectForm toggleCreateProjectForm={this.toggleCreateProjectForm} />
                    </div>
                }
            </div>
        );
    }
}

export default PageProjects;