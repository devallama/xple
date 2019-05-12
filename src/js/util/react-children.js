import React from 'react';

export const deepMap = (children, fn, condition = () => true) => {
    return React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
            return child;
        }

        if (child.props.children && condition(child)) {
            child = React.cloneElement(child, {
                children: deepMap(child.props.children, fn, condition)
            });
        }

        return fn(child);
    });
}