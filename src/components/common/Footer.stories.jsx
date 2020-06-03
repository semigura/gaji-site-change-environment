import { storiesOf } from '@storybook/react';
import React from 'react';
import Decorator from '../../helpers/storybook/decorators';

import Footer from './Footer';

const stories = storiesOf('common/Footer', module);
stories.addDecorator(Decorator);

stories.add('default', () => (
  <Footer
    name="Gaji-Labo Inc."
    facebook="https://www.facebook.com/gajilabo/"
    twitter="https://twitter.com/gaji_labo"
    instagram="https://www.instagram.com/gaji_labo/"
  />
));
