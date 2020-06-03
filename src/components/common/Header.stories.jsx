import { storiesOf } from '@storybook/react';
import React from 'react';
import Decorator from '../../helpers/storybook/decorators';

import Header from './Header';

const stories = storiesOf('common/Header', module);
stories.addDecorator(Decorator);

stories.add('default', () => <Header />);
