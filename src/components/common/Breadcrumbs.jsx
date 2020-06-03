import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import css from './Breadcrumbs.module.scss';

const Breadcrumbs = props => {
  const { className, breadcrumbs } = props;
  if (!breadcrumbs) {
    return null;
  }

  const classes = classNames(css.Breadcrumbs, className);

  return (
    <ul className={classes}>
      <li className={css.Breadcrumbs__Item}>
        <Link to="/">トップページ</Link>
      </li>
      {breadcrumbs.map((path, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className={css.Breadcrumbs__Item}>
          {path.to ? <Link to={`${path.to}/`}>{path.title}</Link> : path.title}
        </li>
      ))}
    </ul>
  );
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      title: PropTypes.string.isRequired,
    }),
  ),
};

Breadcrumbs.defaultProps = {
  className: undefined,
  breadcrumbs: undefined,
};

export default Breadcrumbs;
