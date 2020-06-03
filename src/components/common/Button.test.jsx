import { shallow } from 'enzyme';
import React from 'react';

import Button from './Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button label="button label" />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('with isSmall', () => {
    it('should attach class', () => {
      const wrapper = shallow(<Button label="button label" isSmall />);
      expect(wrapper.find('.Button').hasClass('isSmall')).toBeTruthy();
    });
  });
});
