import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
// NOTE: 直接raw-loaderを指定しているが、できれば webpack.config.js で設定したい
// eslint-disable-next-line
import svgSymbols from '!!raw-loader!../../../sprite.svg';
import Decorator from '../../../helpers/storybook/decorators';

import Icon from './Icon';

const symbolsId = 'svg-symbols';
// console.log(svgSymbols);

if (!document.getElementById(symbolsId)) {
  const addSvg = () => {
    const div = document.createElement('div');
    div.id = symbolsId;
    div.style.display = 'none';
    div.innerHTML = svgSymbols;
    document.body.appendChild(div);
  };
  document.addEventListener('DOMContentLoaded', addSvg);
}

const stories = storiesOf('common/icons/Icon', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Decorator);

stories.add('withKnobs', () => (
  <Icon
    className={text('className', '')}
    name={text('name', 'arrow-right')}
    title={text('title', '')}
  />
));

const rowStyles = {
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
};

const colStyles = {
  fontSize: '32px',
  margin: 0,
  padding: '8px',
  textAlign: 'center',
  width: '120px',
};

const captionStyles = {
  fontSize: '12px',
};

class AllIcons extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      icons: [],
    };
  }

  componentDidMount() {
    const icons = [].slice.call(
      document.querySelectorAll('#svg-symbols > svg > symbol'),
    );
    if (!icons.length) {
      return;
    }

    this.setState({ icons });
  }

  render() {
    const { icons } = this.state;

    return (
      <div style={rowStyles}>
        {icons.map(
          svg =>
            svg.id !== 'logo' && (
              <figure key={svg.id} style={colStyles}>
                <Icon name={svg.id} />
                <figcaption style={captionStyles}>{svg.id}</figcaption>
              </figure>
            ),
        )}
        <figure style={colStyles}>
          <Icon name="logo" style={{ width: '200px', height: '32px' }} />
          <figcaption style={captionStyles}>logo</figcaption>
        </figure>
      </div>
    );
  }
}

stories.add('all icons', () => <AllIcons />);
