import { shallow } from 'enzyme';
import React from 'react';

import ToggleText from './ToggleText';

describe('<ToggleText />', () => {
  it('renders correctly when PC', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
    }));

    const wrapper = shallow(
      <ToggleText>
        <p className="Index__LeadText">
          Gaji-Laboは変化や刺激を必要としているチームの「変数」となり、チームの殻をやわらかくする会社です。チームが持っているそれぞれの物差しに合わせ、生まれる価値や熱量を見つけたり膨らませたり整えたりすること。そのために影で伴走する黒子の役割が、私たちGaji-Laboの仕事です。
        </p>
      </ToggleText>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when SP', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
    }));

    const wrapper = shallow(
      <ToggleText>
        <p className="Index__LeadText">
          Gaji-Laboは変化や刺激を必要としているチームの「変数」となり、チームの殻をやわらかくする会社です。チームが持っているそれぞれの物差しに合わせ、生まれる価値や熱量を見つけたり膨らませたり整えたりすること。そのために影で伴走する黒子の役割が、私たちGaji-Laboの仕事です。
        </p>
      </ToggleText>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleToggle', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
    }));

    const wrapper = shallow(
      <ToggleText>
        <p className="Index__LeadText">
          Gaji-Laboは変化や刺激を必要としているチームの「変数」となり、チームの殻をやわらかくする会社です。チームが持っているそれぞれの物差しに合わせ、生まれる価値や熱量を見つけたり膨らませたり整えたりすること。そのために影で伴走する黒子の役割が、私たちGaji-Laboの仕事です。
        </p>
      </ToggleText>,
    );

    it('renders correctly', () => {
      wrapper.find('.ToggleText__Button').simulate('click');
      expect(
        wrapper.find('.ToggleText__Button').hasClass('isOpen'),
      ).toBeTruthy();
    });
  });
});
