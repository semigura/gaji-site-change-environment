import { shallow, mount } from 'enzyme';
import React from 'react';

import ContactForm from './ContactForm';

describe('<ContactForm />', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <ContactForm action="/contact/success" formName="contact" />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Empty validation is enable', () => {
    const wrapper = mount(
      <ContactForm action="/contact/success" formName="contact" />,
    );
    wrapper.setState({ name: 'foo' });
    wrapper.find('button.ContactForm__ConfirmButton').simulate('click');
    expect(wrapper.state('hasError')).toBeTruthy();
  });

  it('Email validation is enable', () => {
    const wrapper = mount(
      <ContactForm action="/contact/success" formName="contact" />,
    );
    wrapper.setState({ email: 'bar', emailConfirmation: 'baz' });
    wrapper.find('button.ContactForm__ConfirmButton').simulate('click');
    expect(wrapper.state('emailMatchError')).toBeTruthy();
  });

  it('Confirmation is enable', () => {
    const wrapper = mount(
      <ContactForm action="/contact/success" formName="contact" />,
    );
    wrapper
      .instance()
      .setState({
        name: 'foo',
        email: 'foo',
        emailConfirmation: 'foo',
        message: 'foo',
      });
    wrapper.find('button.ContactForm__ConfirmButton').simulate('click');
    expect(wrapper.state('hasError')).toBeFalsy();
  });

  describe('isRecruit=all', () => {
    it('Class name `ContactForm__Select` is applied', () => {
      const wrapper = shallow(
        <ContactForm
          action="/contact/success"
          formName="contact"
          isRecruit="all"
        />,
      );
      expect(wrapper.find('.ContactForm__Select')).toHaveLength(1);
    });
  });

  describe('isRecruit=FE', () => {
    it('Text `フロントエンドエンジニア` is contained', () => {
      const wrapper = mount(
        <ContactForm
          action="/contact/success"
          formName="contact"
          isRecruit="FE"
        />,
      );
      expect(wrapper.find('.ContactForm__Message').text()).toBe(
        'フロントエンドエンジニア',
      );
    });
  });
});
