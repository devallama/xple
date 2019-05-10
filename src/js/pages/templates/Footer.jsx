import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        const stateClass = this.props.isMobileOnly ? "footer--mobile-only" : "";
        return (
            <footer className={`footer ${stateClass}`}>
                <Link to="/privacy-policy" className="link footer__item">privacy policy</Link>
                <Link to="/terms-of-use" className="link footer__item">terms of use</Link>
                <span className="footer__copyright footer__item">extens-iple (xple) © 2019</span>
            </footer>
        );
    }
}

export default Footer;