import React from 'react';
import { shallow } from 'enzyme';

import { Field } from 'Components/Form/Form';

describe('field renders', () => {
    it('should render the form field container element', () => {
        const wrapper = shallow(<Field name="name" />);

        expect(wrapper.find('.form__field')).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the element with custom class name', () => {
        const wrapper = shallow(<Field name="name" className="custom-field-classname" />);

        expect(wrapper.find('custom-field-classname')).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });
});

// describe('field props', () => {

// });