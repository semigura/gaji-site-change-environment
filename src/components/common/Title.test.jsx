import { shallow } from 'enzyme';
import React from 'react';

import Title from './Title';

describe('<Title />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Title>Title</Title>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('withColor', () => {
    it('Class name `withColor` is applied', () => {
      const wrapper = shallow(<Title withColor>Title</Title>);
      expect(wrapper.find('.withColor')).toHaveLength(1);
    });
  });

  describe('tag=h4', () => {
    it('Use h4 tag', () => {
      const wrapper = shallow(<Title tag="h4">Title</Title>);
      expect(wrapper.find('h4')).toHaveLength(1);
    });
  });
});
