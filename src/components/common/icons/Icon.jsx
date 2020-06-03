import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import css from './Icon.module.scss';

const Icon = props => {
  const { className, name, ...attr } = props;
  const classes = classNames(
    css.Icon,
    className,
  );

  return (
    <svg
      // eslint-disable-next-line
      {...attr}
      role="img"
      className={classes}
    >
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
}

Icon.defaultProps = {
  className: undefined,
  title: undefined,
}

export default Icon;
