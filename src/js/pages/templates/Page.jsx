import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);

        document.title = `${this.props.title} | Plan-tinerary`;
    }

    render() {
        if (this.props.pageTemplate) {
            const PageTemplate = this.props.pageTemplate;

            return (
                <PageTemplate {...this.props} />
            );
        } else {
            const PageComponent = this.props.component;

            return (
                <PageComponent {...this.props} />
            );
        }
    }
}

export default Page;