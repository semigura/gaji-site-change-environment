---
to: src/components/<%= sub %>/<%= h.inflection.camelize(name) %>.test.jsx
---
<%
  camelizedName = h.inflection.camelize(name)
-%>
import { shallow } from 'enzyme';
import React from 'react';

import <%= camelizedName %> from './<%= camelizedName %>';

describe('<<%= camelizedName %> />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<<%= camelizedName %> />);
    expect(wrapper).toMatchSnapshot();
  });
});
