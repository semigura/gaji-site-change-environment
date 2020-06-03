import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Decorator from '../../helpers/storybook/decorators';

import Button from './Button';

const stories = storiesOf('common/Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Decorator);

stories.add('default with Knobs', () => (
  <Button
    label={text('text', '提供できるサービス')}
    onClickButton={action('onClick')}
  />
));

stories.add('link', () => (
  <Button label={text('text', '提供できるサービス')} to="/" />
));

stories.add('withIcon={false}', () => (
  <Button
    label={text('text', 'お問い合わせを送信する')}
    onClickButton={action('onClick')}
    withIcon={false}
  />
));

stories.add('isSmall={true}', () => (
  <Button
    label={text('text', 'お問い合わせを送信する')}
    onClickButton={action('onClick')}
    isSmall
  />
));
