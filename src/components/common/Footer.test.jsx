import { shallow } from 'enzyme';
import React from 'react';

import Footer from './Footer';

describe('<Footer />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Footer
        name="Gaji-Labo Inc."
        facebook="https://www.facebook.com/gajilabo/"
        twitter="https://twitter.com/gaji_labo"
        instagram="https://www.instagram.com/gaji_labo/"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
