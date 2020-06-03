import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Decorator from '../../helpers/storybook/decorators';

import Title from './Title';

const stories = storiesOf('common/Title', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Decorator);

stories.add('default', () => (
  <Title tag={text('tag', 'h4')}>
    {text('title', 'ミッションを支えるGaji-Laboのビジョン')}
  </Title>
));

stories.add('withColor', () => (
  <Title withColor tag={text('tag', 'h3')}>
    {text('title', 'ミッションを支えるGaji-Laboのビジョン')}
  </Title>
));
