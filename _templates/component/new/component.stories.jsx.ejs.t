---
to: src/components/<%= sub %>/<%= h.inflection.camelize(name) %>.stories.jsx
---
<%
  camelizedName = h.inflection.camelize(name)
-%>
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

// NOTE: Probably, you need a fix of a path
import Decorator from '../../../helpers/storybook/decorators';

import <%= camelizedName %> from './<%= camelizedName %>';

const stories = storiesOf('<%= sub %>/<%= camelizedName %>', module);
stories.addDecorator(withKnobs);
stories.addDecorator(Decorator);

stories.add('default', () => <<%= camelizedName %> />);
