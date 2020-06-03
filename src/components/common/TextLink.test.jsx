import { shallow } from 'enzyme';
import React from 'react';

import TextLink from './TextLink';

describe('<TextLink />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TextLink label="Label" />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('isCenter', () => {
    it('Class name `isCenter` is applied', () => {
      const wrapper = shallow(<TextLink label="Label" isCenter />);
      expect(wrapper.find('.isCenter')).toHaveLength(1);
    });
  });

  describe('withIcon', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<TextLink label="Label" withIcon />);
      expect(wrapper.find('.withIcon')).toHaveLength(1);
      expect(wrapper.find('.TextLink__Icon')).toHaveLength(1);
    });
  });

  describe('isRight', () => {
    it('Class name `isRight` is applied', () => {
      const wrapper = shallow(<TextLink label="Label" withIcon isRight />);
      expect(wrapper.find('.isRight')).toHaveLength(1);
    });
  });

  describe('isLeft', () => {
    it('Class name `isRight` is applied', () => {
      const wrapper = shallow(<TextLink label="Label" withIcon isLeft />);
      expect(wrapper.find('.isLeft')).toHaveLength(1);
    });
  });
});
