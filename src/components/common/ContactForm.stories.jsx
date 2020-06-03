import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Decorator from '../../helpers/storybook/decorators';

import ContactForm from './ContactForm';

const stories = storiesOf('common/ContactForm', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Decorator);

stories.add('default', () => (
  <ContactForm
    action=''
    formName=''
  />
));

stories.add('isRecruit={all}', () => (
  <ContactForm
    action=''
    formName=''
    isRecruit='all'
  />
));

stories.add('isRecruit={FE}', () => (
  <ContactForm
    action=''
    formName=''
    isRecruit='FE'
  />
));
