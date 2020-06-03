import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Icon from './icons/Icon';

import css from './TextLink.module.scss';

const TextLink = props => {
  const {
    className,
    isCenter,
    isLeft,
    isRight,
    label,
    onClickLink,
    to,
    withIcon,
  } = props;
  const classes = classNames(
    css.TextLink,
    className,
    withIcon ? css.withIcon : '',
    isCenter ? css.isCenter : '',
    isLeft ? css.isLeft : '',
    isRight ? css.isRight : '',
  );
  const iconName = isLeft ? 'arrow-left' : 'arrow-right';

  return (
    <div className={classes}>
      {to ? (
        <Link className={css.TextLink__Link} to={to}>
          {label}
          {withIcon && (
            <Icon
              className={css.TextLink__Icon}
              name={iconName}
              aria-hidden="true"
            />
          )}
        </Link>
      ) : (
        <button
          className={css.TextLink__Link}
          type="button"
          onClick={onClickLink}
        >
          {label}
          {withIcon && (
            <Icon
              className={css.TextLink__Icon}
              name={iconName}
              aria-hidden="true"
            />
          )}
        </button>
      )}
    </div>
  );
};

TextLink.propTypes = {
  className: PropTypes.string,
  isCenter: PropTypes.bool,
  isLeft: PropTypes.bool,
  isRight: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClickLink: PropTypes.func,
  to: PropTypes.string,
  withIcon: PropTypes.bool,
};

TextLink.defaultProps = {
  className: undefined,
  isCenter: false,
  isLeft: false,
  isRight: false,
  onClickLink: undefined,
  to: undefined,
  withIcon: false,
};

export default TextLink;
