import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: true
        };
    }

    toggleSidebar = () => {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    render() {
        return (
            <div className={cn("sidebar", { 'collapsed': this.state.isCollapsed })}>
                <div className="sidebar__logo">
                    <Link to="/projects" aria-label="Go to home"><img src="/assets/icons/logo.png" alt="XPLE logo" /></Link>
                </div>
                <div className="sidebar__account">
                    <div className="sidebar__avatar">
                        <Link to="/account" aria-label="Go to account"><img src="/media/images/avatar/avatar.png" alt="Avatar" /></Link>
                    </div>
                    <div className="sidebar__account-info">
                        <div className="sidebar__info-pre-name">Logged in as</div>
                        <div className="sidebar__info-name">Megan Goodman</div>
                    </div>
                </div>
                <ul className="sidebar__links">
                    <li className="sidebar__link-item">
                        <Link to="/projects" className={cn("link link--white", { 'active': location.href.replace(/.*\//, '').includes('projects') })}>
                            <img className="sidebar__link-icon" src="/assets/icons/project-sidebar.svg" alt="Projects icon" />
                            <span className="sidebar__link-label">Projects</span>
                        </Link>
                    </li>
                    <li className="sidebar__link-divider"></li>
                    {(this.props.isProjectPage) && (
                        <li className="sidebar__link-item" style={{ padding: '0' }}>
                            <ul className="sidebar__links">
                                <li className="sidebar__link-item">
                                    <Link to={`/project/${this.props.projectId}/home`} className={cn("link link--white", { 'active': location.href.replace(/.*\//, '').includes('home') })}>
                                        <img className="sidebar__link-icon" src="/assets/icons/home-sidebar.svg" alt="Project home icon" />
                                        <span className="sidebar__link-label">Project home</span>
                                    </Link>
                                </li>
                                <li className="sidebar__link-item">
                                    <Link to={`/project/${this.props.projectId}/learning-apps`} className={cn("link link--white", { 'active': location.href.replace(/.*\//, '').includes('learning-apps') })}>
                                        <img className="sidebar__link-icon" src="/assets/icons/graduation-cap-sidebar.svg" alt="Learning apps icon" />
                                        <span className="sidebar__link-label">Learning apps</span>
                                    </Link>
                                </li>
                                <li className="sidebar__link-item">
                                    <Link to={`/project/${this.props.projectId}/references`} className={cn("link link--white", { 'active': location.href.replace(/.*\//, '').includes('references') })}>
                                        <img className="sidebar__link-icon" src="/assets/icons/book-sidebar.svg" alt="References icon" />
                                        <span className="sidebar__link-label">References</span>
                                    </Link>
                                </li>
                                <li className="sidebar__link-item">
                                    <Link to={`/project/${this.props.projectId}/timeline`} className={cn("link link--white", { 'active': location.href.replace(/.*\//, '').includes('timeline') })}>
                                        <img className="sidebar__link-icon" src="/assets/icons/calendar-sidebar.svg" alt="Timeline icon" />
                                        <span className="sidebar__link-label">Timeline</span>
                                    </Link>
                                </li>
                                <li className="sidebar__link-item">
                                    <Link to={`/project/${this.props.projectId}/milestones`} className={cn("link link--white", { 'active': location.href.replace(/.*\//, '').includes('milestones') })}>
                                        <img className="sidebar__link-icon" src="/assets/icons/lightning-sidebar.svg" alt="Milestones icon" />
                                        <span className="sidebar__link-label">Milestones</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    )}
                </ul>
                <div className="sidebar__bottom">
                    <ul className="sidebar__links">
                        {this.state.isCollapsed ?
                            (
                                <li className="sidebar__link-item">
                                    <span onClick={this.toggleSidebar} className="link link--white">
                                        <img className="sidebar__link-icon" src="/assets/icons/double-chevron-sidebar.svg" alt="Expand sidebar icon" />
                                    </span>
                                </li>
                            ) : (
                                <li className="sidebar__link-item">
                                    <span onClick={this.toggleSidebar} className="link link--white">
                                        <img className="sidebar__link-icon" src="/assets/icons/double-chevron-collapse-sidebar.svg" alt="Collapse sidebar icon" />
                                        <span className="sidebar__link-label">Collapse sidebar</span>
                                    </span>
                                </li>
                            )
                        }
                        <li className="sidebar__link-item">
                            <Link to="/logout" className="link link--white">
                                <img className="sidebar__link-icon" src="/assets/icons/logout-sidebar.svg" alt="Logout icon" />
                                <span className="sidebar__link-label">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;