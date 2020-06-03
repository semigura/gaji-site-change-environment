import { storiesOf } from '@storybook/react';
import React from 'react';
import Decorator from '../../helpers/storybook/decorators';

import Breadcrumbs from './Breadcrumbs';

const stories = storiesOf('common/Breadcrumbs', module);
stories.addDecorator(Decorator);

stories.add('default', () => (
  <Breadcrumbs
    breadcrumbs={[
      {
        to: '/about',
        title: '会社案内',
      },
      {
        title: 'アクセス',
      },
    ]}
  />
));
