import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Input from './Input/Input';
import Label from './Label/Label';
import Error from './Error/Error';
import Textarea from './Textarea/Textarea';

class Field extends React.Component {
    onChange = event => {
        const input = event.target;
        let field = { ...this.props.field };

        field.value = input.value;

        this.props.updateField(this.props.name, field);
    }

    onFocus = () => {
        let field = { ...this.props.field };

        if (!field.touched) {
            field.touched = true;

            this.props.updateField(this.props.name, field);
        }
    }

    onBlur = event => {
        let input = event.target;
        let field = this.props.validateField({ ...this.props.field }, input);

        this.props.updateField(this.props.name, field);
    }

    render() {
        const children = React.Children.map(this.props.children, child => {
            if (child.type == Input || child.type == Textarea) {
                return [React.cloneElement(child, {
                    name: this.props.name,
                    value: this.props.field.value,
                    onBlur: this.onBlur,
                    onChange: this.onChange,
                    onFocus: this.onFocus
                }),
                (!this.props.hideError && this.props.field) && (
                    <Error isValid={this.props.field.valid} errorClassName={this.props.errorClassName} errorMessage={this.props.field.errorMessage} />
                )];
            } else if (child.type == Label) {
                return React.cloneElement(child, {
                    name: this.props.name
                });
            } else {
                return React.cloneElement(child);
            }
        });

        return (
            <div className={cn('form__field', this.props.className)}>
                {children}
            </div>
        );
    }
}

Field.propTypes = {
    name: PropTypes.string.isRequired
};

export default Field;