import React from 'react';
import { shallow } from 'enzyme';

import Form from 'Components/Form/Form';

describe('Form render tests', () => {
    it('Renders form element', () => {
        const wrapper = shallow(<Form />);

        expect(wrapper.find('form')).toBeDefined();
    });

    it('Renders form with noValidate attribute', () => {
        const wrapper = shallow(<Form noValidate={true} />);

        expect(wrapper.find('form [novalidate]')).toBeDefined();
    });

    it('Renders with className prop', () => {
        const wrapper = shallow(<Form className="form" />);

        expect(wrapper.find('form').hasClass("form")).toEqual(true);
    });
});