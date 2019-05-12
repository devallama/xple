import React from 'react';
import { Link } from 'react-router-dom';

class ProjectHome extends React.Component {
    render() {
        const projectId = this.props.computedMatch.params.projectId;

        return (
            <div>
                <div className="row">
                    <div className="column medium-6">
                        <h1 className="icon-title icon-title--project">Project Home</h1>
                    </div>
                </div>
                <div className="row column main-content overflow--hidden">
                    <div className="card__grid">
                        <div className="card__item">
                            <Link to={`/project/${projectId}/learning-apps`} className="link link--black card__link" >
                                <h2 className="icon-title icon-title--learning-apps card__title">Learning Apps</h2>
                                <p className="size-large">Use learning tools to help you learn.</p>
                                <img className="card__icon" src="/assets/icons/arrow-cta.svg" alt="Go" />
                            </Link>
                        </div>

                        <div className="card__item">
                            <Link to={`/project/${projectId}/references`} className="link link--black card__link" >
                                <h2 className="icon-title icon-title--references card__title">References</h2>
                                <p className="size-large">Manage your references for your project.</p>
                                <img className="card__icon" src="/assets/icons/arrow-cta.svg" alt="Go" />
                            </Link>
                        </div>

                        <div className="card__item">
                            <Link to={`/project/${projectId}/timeline`} className="link link--black card__link" >
                                <h2 className="icon-title icon-title--timeline card__title">Timeline</h2>
                                <p className="size-large">See the timeline of your project milestones.</p>
                                <img className="card__icon" src="/assets/icons/arrow-cta.svg" alt="Go" />
                            </Link>
                        </div>
                        <div className="card__item">
                            <Link to={`/project/${projectId}/milestones`} className="link link--black card__link" >
                                <h2 className="icon-title icon-title--milestones card__title">Milestones</h2>
                                <p className="size-large">Manage your tasks, milestones and deadlines.</p>
                                <img className="card__icon" src="/assets/icons/arrow-cta.svg" alt="Go" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectHome;