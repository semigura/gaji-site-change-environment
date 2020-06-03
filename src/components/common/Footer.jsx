import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Icon from './icons/Icon';

import css from './Footer.module.scss';

const Footer = props => {
  const { className, name, facebook, twitter, instagram } = props;
  const classes = classNames(css.Footer, className);
  const icons = [
    {
      href: facebook,
      name: 'facebook',
      title: 'Facebook',
    },
    {
      href: twitter,
      name: 'twitter',
      title: 'Twitter',
    },
    {
      href: instagram,
      name: 'instagram',
      title: 'Instagram',
    },
  ];

  return (
    <footer className={classes}>
      <div className={css.Footer__Links}>
        <div className={css.Footer__LinksInner}>
          <Link className={css.Footer__Logo} to="/">
            <Icon className={css.Footer__Icon} name="logo" />
          </Link>
          <ul className={css.Footer__List}>
            {icons.map(icon => (
              <li className={css.Footer__ListItem} key={icon.name}>
                <a
                  className={css.Footer__SNS}
                  href={icon.href}
                  title={icon.title}
                  rel="nofollow noreferrer"
                >
                  <Icon name={icon.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.Footer__Footer}>
        <ul className={css.Footer__MenuList}>
          <li>
            <Link className={css.Footer__Link} to="/about/access/">
              アクセス
            </Link>
          </li>
          <li>
            <Link className={css.Footer__Link} to="/privacy/">
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link className={css.Footer__Link} to="/recruit/">
              採用情報
            </Link>
          </li>
          <li>
            <Link className={css.Footer__Link} to="/sitemap/">
              サイトマップ
            </Link>
          </li>
        </ul>
        <span className={css.Footer__Copyright}>{`©️ ${name} 2016`}</span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  className: undefined,
};

export default Footer;
