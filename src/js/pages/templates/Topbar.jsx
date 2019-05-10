import React from 'react';
import { Link } from 'react-router-dom';

class Topbar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <Link to="/"><img src="/assets/icons/logo.png" alt="xple logo" className="topbar__logo" /></Link>
            </div>
        );
    }
}

export default Topbar;