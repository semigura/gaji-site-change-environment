import { shallow } from 'enzyme';
import React from 'react';

import Header from './Header';

describe('<Header />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleToggle', () => {
    const wrapper = shallow(<Header />);
    const button = wrapper.find('.Header__Button');

    it('renders correctly', () => {
      button.simulate('click');
      const menu = wrapper.find('.Header__Menu');
      expect(menu.hasClass('isOpen')).toBeTruthy();
    });
  });
});
