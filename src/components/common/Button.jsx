import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Icon from './icons/Icon';

import css from './Button.module.scss';

const Button = props => {
  const { className, isSmall, label, onClickButton, to, withIcon } = props;
  const classes = classNames(css.Button, { [css.isSmall]: isSmall }, className);

  return to ? (
    <Link to={to} className={classes}>
      {label}
      {withIcon && (
        <Icon
          className={css.Button__Icon}
          name="arrow-right"
          aria-hidden="true"
        />
      )}
    </Link>
  ) : (
    <button type="button" className={classes} onClick={onClickButton}>
      {label}
      {withIcon && (
        <Icon
          className={css.Button__Icon}
          name="arrow-right"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  isSmall: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClickButton: PropTypes.func,
  to: PropTypes.string,
  withIcon: PropTypes.bool,
};

Button.defaultProps = {
  className: undefined,
  isSmall: false,
  onClickButton: undefined,
  to: undefined,
  withIcon: true,
};

export default Button;
