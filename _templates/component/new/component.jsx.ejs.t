---
to: src/components/<%= sub %>/<%= h.inflection.camelize(name) %>.jsx
---
<%
  camelizedName = h.inflection.camelize(name)
-%>
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import css from './<%= camelizedName %>.scss';

const <%= camelizedName %> = props => {
  const { className } = props;
  const classes = classNames(
    css.<%= camelizedName %>,
    className,
  );

  return (
    <div className={classes} />
  );
};

<%= camelizedName %>.propTypes = {
  className: PropTypes.string,
}

<%= camelizedName %>.defaultProps = {
  className: undefined,
}

export default <%= camelizedName %>;
