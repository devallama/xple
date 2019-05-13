import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import Footer from '../Footer';
import Topbar from '../Topbar';

class Landing extends React.Component {
    render() {
        const PageComponent = this.props.component;
        return (
            <div className="page">
                <Topbar />
                <main className={cn("landing", "page-body", { "landing--no-bg-mobile": this.props.hideMobileBackground })}>
                    <div className="row">
                        <div className="column">
                            <div>
                                <Link to="/" aria-label="Go to home"><img src="/assets/icons/logo.png" alt="xple logo" className="landing-logo" /></Link>
                            </div>

                            <div className="landing-content">
                                <PageComponent {...this.props} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Landing;