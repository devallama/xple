import React from 'react';

import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        //if (this.props.user && this.props.user.isLoggedIn) {
        return (
            <div className="topbar">
                <div className="topbar__logo">
                    XPLE
                </div>
                <div className="topbar__navigation">
                    <nav className="site-nav">
                        <ul className="site-nav__list">
                            <li className="site-nav__item">
                                <Link to="/dashboard" className="site-nav__link text-white">Dashboard</Link>
                            </li>
                            <li className="site-nav__item">
                                <Link to="/logout" className="site-nav__link text-white">Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
        //} else {
        return (
            <div></div>
        );
        //}
    }
}

export default Header;