import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Decorator from '../../helpers/storybook/decorators';

import TextLink from './TextLink';

const stories = storiesOf('common/TextLink', module);
stories.addDecorator(Decorator);

stories.add('default', () => (
  <div>
    <TextLink to="/" label="提供できるサービス" />
    <TextLink to="/" label="提供できるサービス" />
  </div>
));

stories.add('isCenter', () => (
  <TextLink to="/" label="提供できるサービス" isCenter />
));

stories.add('withIcon isRight', () => (
  <TextLink to="/" label="提供できるサービス" withIcon isRight />
));

stories.add('withIcon isLeft', () => (
  <TextLink to="/" label="提供できるサービス" withIcon isLeft />
));

stories.add('button withIcon', () => (
  <TextLink
    label="提供できるサービス"
    onClickLink={action('onClick')}
    withIcon
  />
));
