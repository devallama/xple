import React from 'react';
import { shallow, render } from 'enzyme';

import Form, { Field } from 'Components/Form/Form';

describe('form renders', () => {
    it('should render form element', () => {
        const wrapper = shallow(<Form />);

        expect(wrapper.find('form')).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });

    it('should render form with noValidate attribute', () => {
        const wrapper = shallow(<Form noValidate={true} />);

        expect(wrapper.find('form [novalidate]')).toBeDefined();
    });

    it('should render with className prop', () => {
        const wrapper = shallow(<Form className="form" />);

        expect(wrapper.find('form').hasClass("form")).toEqual(true);
    });
});

describe('form methods', () => {
    it('should call function on submit', () => {
        const submitFunc = jest.fn();
        const wrapper = shallow(<Form />);

        wrapper.instance().onSubmit = submitFunc;
        wrapper.instance().forceUpdate();

        wrapper.find('form').simulate('submit');
        expect(submitFunc).toBeCalled();
    });
});

describe('renders children', () => {
    it('should render children', () => {
        const wrapper = render(
            <Form>
                <h1>Form</h1>
                <Field name="email" />
            </Form>
        );

        expect(wrapper.find('h1')).toBeDefined();
        expect(wrapper.find('h1').text()).toEqual('Form');
        expect(wrapper.find(Field)).toBeDefined();

        expect(wrapper).toMatchSnapshot();
    });
});

describe('apply props to children', () => {
    it('should apply field prop to Field', () => {
        const fields = {
            'email': {}
        };
        const wrapper = mount(
            <Form fields={fields}>
                <Field name="email" />
            </Form>
        );

        expect(wrapper.find(Field).prop('field')).toBeInstanceOf(Object);
    });

    it('should apply updateField prop to Field', () => {
        const wrapper = mount(
            <Form>
                <Field name="email" />
            </Form>
        );

        expect(wrapper.find(Field).prop('updateField')).toBe(wrapper.instance().updateField);
    });

    it('should apply validateField prop to Field', () => {
        const wrapper = mount(
            <Form>
                <Field name="email" />
            </Form>
        );

        expect(wrapper.find(Field).prop('validateField')).toBe(wrapper.instance().validateField);
    });

    it('should apply hideError prop to Field', () => {
        const wrapper = mount(
            <Form hideErrors={true}>
                <Field name="email" />
            </Form>
        );

        expect(wrapper.find(Field).prop('hideError')).toBe(true);
    });
});