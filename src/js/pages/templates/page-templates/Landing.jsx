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
                <div className={cn("landing", "content", { "landing--no-bg-mobile": this.props.hideMobileBackground })}>
                    <div className="row">
                        <div className="column">
                            <div>
                                <Link to="/"><img src="/assets/icons/logo.png" alt="xple logo" className="landing-logo" /></Link>
                            </div>

                            <main className="landing-main">
                                <PageComponent {...this.props} />
                            </main>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Landing;