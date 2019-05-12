import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { projectDelete } from 'Actions/project-actions';

import cn from 'classnames';
import dayjs from 'dayjs';
import ordinal from 'ordinal';

import EditProjectForm from 'Components/EditProjectForm/EditProjectForm';
import TimelineMini from 'Components/TimelineMini/TimelineMini';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuVisible: false,
            isConfirmDeleteVisible: false,
            isEditFormVisible: false,
            milestones: []
        };

        this.menuRef = React.createRef();

        document.body.addEventListener('click', this.bodyClick);
    }

    componentWillUpdate(nextProps) {
        if (this.props.milestones != nextProps.milestones) {
            this.setState({
                milestones: nextProps.milestones.filter(milestone => milestone.projectId == this.props.project.id)
            });
        }
    }

    bodyClick = event => {
        if (this.menuRef.current && !this.menuRef.current.contains(event.target)) {
            this.toggleMenu();
        }

        if (this.state.isConfirmDeleteVisible && event.target == event.currentTarget) {
            this.closeDeletePopup();
        }

        if (this.state.isEditFormVisible && event.target == event.currentTarget) {
            this.toggleEditForm();
        }
    }

    toggleMenu = () => {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        });
    }

    toggleEditForm = () => {
        this.setState({
            isEditFormVisible: !this.state.isEditFormVisible
        }, () => {
            this.state.isEditFormVisible ? document.body.classList.add('overlay') : document.body.classList.remove('overlay');
        });
    }

    closeDeletePopup = () => {
        this.setState({
            isConfirmDeleteVisible: false
        }, () => document.body.classList.remove('overlay'));
    }

    showDeletePopup = () => {
        this.toggleMenu();

        this.setState({
            isConfirmDeleteVisible: true
        }, () => document.body.classList.add('overlay'));
    }

    editProject = () => {

    }

    deleteProject = projectId => {
        this.props.projectDelete(projectId);

        this.closeDeletePopup();
    }

    render() {
        const { project } = this.props;

        const milestones = this.state.milestones.slice(0, 3).map(milestone => {
            const date = dayjs(milestone.date);
            return (
                <li className="project-card__milestone-item" key={milestone.id}>
                    <span className="project-card__milestone-title">{milestone.name}</span>
                    <span className="project-card__milestone-date">{`${ordinal(date.date())} ${date.format('MMM')}`}</span>
                </li>
            );
        });

        return (
            <div className="project-card">
                <div className="project-card__main">
                    <div className="project-card__top">
                        <div className="row overflow--default">
                            <div className="column medium-10">
                                <Link to={`/project/${project.id}/home`} className="link link--black">
                                    <h2 className="project-card__title">
                                        {project.name}
                                    </h2>
                                </Link>
                            </div>
                            <div className="column medium-2 text-right">
                                <button onClick={this.toggleMenu}
                                    className={cn("project-card__menu-toggle", { 'isOpen': this.state.isMenuVisible })}
                                    aria-label="Open project menu"
                                />
                                {this.state.isMenuVisible && (
                                    <div className="popup-box__container">
                                        <div className="project-card__menu popup-box popup-box--origin" ref={this.menuRef}>
                                            <ul className="project-card__menu-list">
                                                <li className="project-card__menu-item">
                                                    <button className="link" onClick={() => { this.toggleMenu(); this.toggleEditForm(); }}>Edit project</button>
                                                </li>
                                                <li className="project-card__menu-item">
                                                    <button className="link" onClick={this.showDeletePopup}>Delete project</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                                {this.state.isConfirmDeleteVisible && (
                                    <div className="popup-box p-4">
                                        Are you sure you want to delete this project?
                                        <div className="text-center m-t-2">
                                            <button className="btn btn--neutral btn--small weight--light m-r-1"
                                                onClick={this.closeDeletePopup}
                                            >
                                                No
                                            </button>
                                            <button className="btn btn--danger btn--small weight--light m-l-1"
                                                onClick={() => this.deleteProject(project.id)}
                                            >
                                                Yes
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="project-card__group">
                                {project.group}
                            </h3>
                        </div>
                    </div>
                    <p className="project-card__desc">
                        {project.description}
                    </p>
                    <div className="project-card__milestones">
                        <h3 className="project-card__sub-title">Upcoming milestones</h3>
                        {milestones.length > 0 ?
                            (
                                <ul className="project-card__milestones-list">
                                    {milestones}
                                </ul>
                            ) : (
                                <p>No milestones have been created.</p>
                            )
                        }

                        <div className="text-right">
                            <Link to={`/project/${project.id}/milestones`} className="link link--cta link--black">View milestones</Link>
                        </div>
                    </div>
                </div>
                <div className="project-card__timeline">
                    <h3 className="project-card__sub-title">Timeline</h3>
                    <TimelineMini startDate={project.startDate} endDate={project.endDate} milestones={this.state.milestones} />
                </div>
                <div className="project-card__link">
                    <Link to={`/project/${project.id}/home`} className="link link--black link--cta">Go to project</Link>
                </div>
                {this.state.isEditFormVisible &&
                    <div className="side-overlay side-overlay--right">
                        <EditProjectForm toggleEditForm={this.toggleEditForm} project={project} />
                    </div>
                }
            </div>
        );
    }
}

ProjectCard.propTypes = {
    projectDelete: PropTypes.func.isRequired,
    response: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return ({
        response: state.project.response
    });
};

export default connect(mapStateToProps, { projectDelete })(ProjectCard);