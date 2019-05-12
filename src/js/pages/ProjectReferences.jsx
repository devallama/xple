import React from 'react';

import References from 'Components/References/References';

class PageReferences extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="column medium-6">
                        <h1 className="icon-title icon-title--references">References</h1>
                    </div>
                </div>
                <div className="row column main-content">
                    <References />
                </div>
            </div>
        );
    }
}

export default PageReferences;