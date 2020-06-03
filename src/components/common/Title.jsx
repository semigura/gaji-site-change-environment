import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import css from './Title.module.scss';

const Title = props => {
  const { className, children, tag, withColor } = props;
  const classes = classNames(css.Title, className);
  const titleClasses = classNames(
    css.Title__Text,
    withColor ? css.withColor : '',
  );
  const Tag = tag || 'h2';

  return (
    <div className={classes}>
      <Tag className={titleClasses}>{children}</Tag>
    </div>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  tag: PropTypes.oneOf(['h1', 'h3', 'h4', 'h5']),
  withColor: PropTypes.bool,
};

Title.defaultProps = {
  className: undefined,
  tag: undefined,
  withColor: false,
};

export default Title;
