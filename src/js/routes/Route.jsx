import React from 'react';
import { Route as BaseRoute } from 'react-router-dom';

import Page from 'Pages/templates/Page';

class Route extends BaseRoute {
    render() {
        const { props } = this;

        return (
            <Page {...props} />
        );
    }
}

export default Route;