import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

class Topbar extends React.Component {
    render() {
        return (
            <div className="topbar">
                {this.props.isSidebarVisible &&
                    <button className={cn("topbar__toggle-sidebar", { 'active': !this.props.isSidebarCollapsed })} aria-label="Toggle the site navigation sidebar" onClick={this.props.toggleSidebar} />
                }
                <Link to="/"><img src="/assets/icons/logo.png" alt="xple logo" className="topbar__logo" /></Link>
            </div>
        );
    }
}

export default Topbar;