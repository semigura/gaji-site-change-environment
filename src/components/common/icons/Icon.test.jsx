import { shallow } from 'enzyme';
import React from 'react';

import Icon from './Icon';

describe('<Icon />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Icon name="logo" />);
    expect(wrapper).toMatchSnapshot();
  });
});
