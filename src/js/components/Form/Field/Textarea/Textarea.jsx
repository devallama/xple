import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
    render() {
        const {
            name,
            type,
            ...rest
        } = this.props;

        return 
            <textarea id={`input_${name}`} name={name} className={`form__textarea`} {...rest} />
        );
    }
}

Textarea.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

export default Textarea;