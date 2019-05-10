import React from 'react';

export const deepMap = (children, callback, condition = () => true) => {
    return React.Children.map(children, child =>
        React.isValidElement(child) && (child.props.children && condition(child) ? [callback(child), deepMap(child.props.children, callback, condition)] : callback(child))
    );
};